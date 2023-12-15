interface Booking {
  year: number | null;
  month: number | null;
  day: string;
  time: string;
  shop: string;
  monthKey: string;
  name: string;
  email: string;
  tel: string;
}

const initialBooking: Booking = {
  year: null,
  month: null,
  day: "",
  time: "",
  shop: "",
  monthKey: "",
  name: "",
  email: "",
  tel: "",
};

function reducer(state: Booking, action: any) {
  
  switch (action.type) {
    case "CHANGE-SHOP":
      return {
        ...initialBooking,
        shop: action.shop,
      };
    case "CHANGE-MONTH":
      return {
        ...initialBooking,
        shop: state.shop,
        year: action.year,
        month: action.month,
        monthKey: action.monthKey,
      };
    case "CHANGE-DAY":
      return { ...state, day: action.day };
    case "CHANGE-TIME":
      return {
        ...state,
        time: action.time,
      };
    case "CHANGE-NAME":
      return { ...state, name: action.name };
    case "CHANGE-EMAIL":
      return { ...state, email: action.email };
    case "CHANGE-TEL":
      return { ...state, tel: action.tel };
    default:
      return state;
  }
}

export { initialBooking, reducer };
