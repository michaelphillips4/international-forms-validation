import { useReducer, useState } from "react";
import ListWithLabel from "../components/ListWithLabel";
import TextWithLabel from "../components/TextWithlabel";
import { initialBooking, reducer } from "./bookingFormReducer";
import { getDaysForMonthOptions } from "./bookingDates";
import { FormattedMessage, FormattedDate} from "react-intl";
import { BookingFormProps } from "./bookingFormProps";

const Form = ({defaultOption,title,shops,next12Months,weekDayNames,timeSlots,
  shopLabel,monthLabel,dayLabel,timeLabel, nameLabel,telLabel,emailLabel,
  emailPlaceHolder,telPlaceHolder,namePlaceHolder,messageLabel,buttonText,}: BookingFormProps) => {

  const [booking, dispatch] = useReducer(reducer, initialBooking);
  const [bookingComplete, setBookingComplete] = useState(false);
  const clearDefaultOption = (v: string) => (v === defaultOption ? "" : v);

  const isFormValid = () =>
    booking.shop &&
    booking.year &&
    booking.month &&
    booking.day &&
    booking.time &&
    booking.tel &&
    booking.email &&
    booking.name;

let bookingDate = new Date(booking.year,booking.month,parseInt(booking.day));

    const monthChangeHandler =(v: string)=>
    {
        let m = null,y = null;
        if (next12Months.has(v)) {
           const p = next12Months.get(v) || {month:0,year:0};
           m= p.month; y= p.year;
        } 
        dispatch({type: "CHANGE-MONTH",monthKey: clearDefaultOption(v), year: y, month: m});
      
    }

  return (
    <>
       {bookingComplete && (<>
        <h3> <FormattedMessage id="appointmentBooked" />  </h3>
         <br />
         <b>Time:</b> {booking.time} 
         <br />
         <b>Day:</b> <FormattedDate value={bookingDate}  
         year="numeric"
         month="long"
         day="2-digit" />
         <br />
         <b>At:</b> {booking.shop}.        
      
      </>)}

      {!bookingComplete && (
        <>
          <h3>{title}</h3>

          <ListWithLabel
            id="where"
            labelMessage={shopLabel}
            options={shops}
            onChangeHandler={(e) =>
              dispatch({ type: "CHANGE-SHOP", shop: clearDefaultOption(e.target.value) })
            }
            value={booking.shop}
          />

          {booking.shop && (
            <ListWithLabel
              id="month"
              options={[defaultOption, ...next12Months.keys()]}
              labelMessage={monthLabel}
              onChangeHandler={(e) => monthChangeHandler(e.target.value)}
              value={booking.monthKey}
            />
          )}

          {(booking.month !== null || booking.month) && (
            <ListWithLabel
              id="days"
              options={[
                defaultOption,
                ...getDaysForMonthOptions(
                  booking.month,
                  booking.year,
                  weekDayNames
                ).keys(),
              ]}
              labelMessage={dayLabel}
              onChangeHandler={(e) =>
                dispatch({ type: "CHANGE-DAY", day: clearDefaultOption(e.target.value) })
              }
              value={booking.day}
            />
          )}

          {booking.day && (
            <ListWithLabel
              id="time"
              options={timeSlots}
              labelMessage={timeLabel}
              onChangeHandler={(e) =>
                dispatch({ type: "CHANGE-TIME", time: clearDefaultOption(e.target.value) })
              }
              value={booking.time}
            />
          )}

          {booking.time && (
            <>
              <TextWithLabel
                id="name"
                labelMessage={nameLabel}
                placeHolder={namePlaceHolder}
                onChangeHandler={(e) =>
                  dispatch({ type: "CHANGE-NAME", name: e.target.value })
                }
                value={booking.name}
              />

              <TextWithLabel
                id="email"
                labelMessage={emailLabel}
                placeHolder={emailPlaceHolder}
                onChangeHandler={(e) =>
                  dispatch({ type: "CHANGE-EMAIL", email: e.target.value  })
                }
                value={booking.email}
              />

              <TextWithLabel
                id="tel"
                labelMessage={telLabel}
                placeHolder={telPlaceHolder}
                onChangeHandler={(e) =>
                  dispatch({ type: "CHANGE-TEL", tel: e.target.value  })
                }
                value={booking.tel}
              />

              <label htmlFor="message" >
                {messageLabel}
              </label>
              <textarea id="message"></textarea>
              <button
                type="submit"
                className={` ${
                  isFormValid() ? "" : "disabled"
                }`}
                onClick={() => setBookingComplete(true)}
              >
                {buttonText}
              </button>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Form;
