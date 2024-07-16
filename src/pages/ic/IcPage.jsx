import IcsTable from '../../components/tables/ics/Ics';
import { IcsInfo } from '../../contexts/IcsInfo/IcsInfo';
import './index.css'

const IcPage = () => {
  const { icsData } = IcsInfo();

  return (
    <div className="page ic_page">
      <IcsTable data={icsData} />
    </div>
  );
}

export default IcPage;