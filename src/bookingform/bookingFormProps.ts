
export interface BookingFormProps {
    defaultOption: string;
    title: string;
    shops: string[];
    next12Months: Map<string, { month: number; year: number }>;
    weekDayNames: string[];
    timeSlots: string[];
    shopLabel: string;
    monthLabel: string ,
    dayLabel: string,
    timeLabel: string,
    nameLabel: string,
    telLabel: string,
    emailLabel: string,
    namePlaceHolder: string;
    emailPlaceHolder: string;
    telPlaceHolder: string;
    messageLabel: string;
    buttonText: string;
  }