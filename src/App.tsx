import {ChangeEvent,useState } from "react";
import { Routes, Route} from "react-router-dom";
import { IntlProvider } from "react-intl";
import { LOCALES } from "./i18n/locales";
import { messages } from "./i18n/messages";
import { Index } from "./Index";
import  BookAnAppointment from "./bookingform/BookAnAppointment";
import Layout from "./Layout";

function getInitialLocal() {
  const savedLocale = localStorage.getItem("locale");
  return savedLocale || LOCALES.ENGLISH;
}

export default function App() {
  const [currentLocale, setCurrentLocale] = useState(getInitialLocal());

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCurrentLocale(e.target.value);
    localStorage.setItem("locale", e.target.value);
  };

  return (
    <IntlProvider
      messages={messages[currentLocale]}
      locale={currentLocale}
      defaultLocale={LOCALES.ENGLISH}
    >
      <Routes>
        <Route
          path="/"
          element={
            <Layout currentLocale={currentLocale} handleChange={handleChange} />
          }
        >
          <Route index element={<Index />} />
          <Route path="BookingForm" element={<BookAnAppointment />} />
          <Route path="*" element={<Index />} />
        </Route>
      </Routes>
    </IntlProvider>
  );
}

