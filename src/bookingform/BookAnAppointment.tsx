import { useIntl } from "react-intl";
import { getMonthsOptions, stringToArrayHelper } from "./bookingDates";
import { getShops, getTime } from "./bookingHelpers";
import Form from "./BookingForm";

const BookAnAppointment = () => {
  const getFormatMessage = (messageId: string) =>
    useIntl().formatMessage({ id: messageId });

  const defaultOption = getFormatMessage("bookAnAppointment_selectItem");
  const weekDayNames = stringToArrayHelper(getFormatMessage("weekDayNames"));
  const monthNames = stringToArrayHelper(getFormatMessage("monthNames"));

  return (
    <div className="notice">
      <Form
        defaultOption={defaultOption}
        title={getFormatMessage("bookAnAppointment_Title")}
        shops={getShops(defaultOption)}
        next12Months={getMonthsOptions(new Date(), monthNames)}
        weekDayNames={weekDayNames}
        timeSlots={getTime(defaultOption)}
        shopLabel={getFormatMessage("bookAnAppointment_selectShopLabel")}
        monthLabel={getFormatMessage("bookAnAppointment_monthLabel")}
        dayLabel={getFormatMessage("bookAnAppointment_dayLabel")}
        timeLabel={getFormatMessage("bookAnAppointment_timeLabel")}
        nameLabel={getFormatMessage("bookAnAppointment_nameLabel")}
        telLabel={getFormatMessage("bookAnAppointment_telLabel")}
        emailLabel={getFormatMessage("bookAnAppointment_emailLabel")}
        emailPlaceHolder={getFormatMessage("bookAnAppointment_emailPlaceHolder")}
        telPlaceHolder={getFormatMessage("bookAnAppointment_telPlaceHolder")}
        namePlaceHolder={getFormatMessage("bookAnAppointment_namePlaceHolder")}
        messageLabel={getFormatMessage("bookAnAppointment_messageLabel")}
        buttonText={getFormatMessage("bookAnAppointment_submitLabel")}
      />
    </div>
  );
};

export default BookAnAppointment;
