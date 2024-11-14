import { useEffect, useState } from "react";
import PageLoader from "../../components/PageLoader";
import companiesApi from "../../apis/companies";
import CompanyList from "./CompanyList";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [companies, setCompanies] = useState(null);

  const fetchData = async () => {
    try {
      const { data } = await companiesApi.fetchAll();
      setCompanies(data.companies);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }

  return <CompanyList companies={companies} />;
};

export default Home;
