import { useEffect, useState } from "react";
import PageLoader from "../../components/PageLoader";
import companiesApi from "../../apis/companies";
import CompanyList from "./CompanyList";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [companies, setCompanies] = useState(null);

  const navigate = useNavigate();

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

  const onCompanySelect = (companyId) => {
    navigate(`/${companyId}`);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }

  return <CompanyList companies={companies} onSelect={onCompanySelect} />;
};

export default Home;
