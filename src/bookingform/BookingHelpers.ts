const Shops = [
    "GENOA - Mazzini Gallery, 42/R",
    "MILAN - Sala Dei Longobardi, 2 (Emporio Falcai)",
    "ROME - Via Veneto 104",
    "Sartoria Rossi - Factory Store - Outlet Marciano Della Chiana",
  ];

  const TimeSlots = [
    "10:15",
    "10:30",
    "10:45",
    "11:00",
    "11:15",
    "11:30",
    "11:45",
    "12:00",
    "12:15",
    "12:30",
    "12:45",
    "13:00",
    "13:15",
    "13:30",
    "13:45",
    "14:00",
    "14:15",
    "14:30",
    "14:45",
    "15:00",
    "15:15",
    "15:30",
    "15:45",
    "16:00",
    "16:15",
    "16:30",
    "16:45",
    "17:00",
    "17:15",
    "17:30",
    "17:45",
    "18:00",
    "18:15",
    "18:30",
    "18:45",
    "19:00",
  ];

  const getShops = (defaultOption: string) => [defaultOption,...Shops];

  const getTime = (defaultOption: string) => [defaultOption,...TimeSlots];

  export {getShops,getTime};