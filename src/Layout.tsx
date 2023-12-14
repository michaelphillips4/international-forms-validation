import {ChangeEventHandler} from "react";
import {Link,Outlet} from "react-router-dom";
import {FormattedMessage} from "react-intl";
import { LOCALES } from "./i18n/locales";

const languages = [
    { name: "English", code: LOCALES.ENGLISH },
    { name: "Italian", code: LOCALES.ITALIAN },
  ];

export default function Layout({
    currentLocale,
    handleChange,
  }: {
    currentLocale: string;
    handleChange:  ChangeEventHandler<HTMLSelectElement>;
  }) {
    return (
      <>
        <header>
          <h1>
            <FormattedMessage id="heading" />
          </h1>
          <nav>
            <Link to="BookingForm">
              <FormattedMessage id="bookingForm" />
            </Link>
            <Link to="/">
              <FormattedMessage id="home" />
            </Link>
             <select onChange={handleChange} value={currentLocale}>
          {languages.map(({ name, code }) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
        </select>
          </nav>
        </header>
        <Outlet />
      </>
    );
  }
  