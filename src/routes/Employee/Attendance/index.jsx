import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import attendancesApi from "../../../apis/attendances";
import PageLoader from "../../../components/PageLoader";
import Error from "../../../components/Error";
import { getCurrentYearMonth, getSheetData } from "./utils";
import DateFilter from "./DateFilter";
import Sheet from "./Sheet";

const Attendance = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [date, setDate] = useState(getCurrentYearMonth());
  const [attendances, setAttendances] = useState();

  const { clientId } = useParams();

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const { data } = await attendancesApi.fetchAll({
        clientId,
        start: date * 100 + 1,
        end: date * 100 + 31,
      });
      setAttendances(getSheetData(data.attendances));
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const onTogglePresence = async (employeeId, date) => {
    const datasetRecord = attendances.find(
      (item) => item.employee.id === employeeId
    );
    const dateItem = datasetRecord.attendances[date];
    try {
      const payload = {
        client_id: clientId,
        employee_id: employeeId,
        date,
        presence: dateItem && dateItem.presence ? 0 : 1,
      };
      console.log(payload, dateItem);
      await (dateItem
        ? attendancesApi.updateOne(dateItem.id, payload)
        : await attendancesApi.createOne(payload));
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (clientId) fetchData();
  }, [clientId]);

  if (isLoading) {
    return <PageLoader />;
  }

  if (!attendances) {
    return <Error title="Could not load attendances" />;
  }

  return (
    <>
      <header className="w-full flex justify-between items-center gap-5">
        <h2 className="text-2xl leading-none font-semibold mb-5">
          Attendance Details
        </h2>
        <DateFilter date={date} setDate={setDate} />
      </header>
      <section className="max-w-full overflow-x-scroll pb-3">
        <Sheet
          date={date}
          dataset={attendances}
          onTogglePresence={onTogglePresence}
        />
      </section>
    </>
  );
};

export default Attendance;
