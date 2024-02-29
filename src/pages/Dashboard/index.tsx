import { Button, Select } from 'antd';
import { Col, Row } from 'antd';
import PDF from './components/PDF';
import MenuForm from './components/MenuForm';
import BreadCrumb from 'Components/Common/BreadCrumb';
import { DownloadOutlined } from '@ant-design/icons';
interface IDateFormat {
  date?: string;
  month?: string;
  year?: string;
}

const { Option } = Select;

const Dashboard = () => {
  document.title = 'Dashboard | Velzon - React Admin & Dashboard Template';

  return (
    <>
      <div className="page-content">
        <Row className="flex justify-space-between">
          <Col>
            <h5 className="mb-3">Tạo mới hợp đồng</h5>
          </Col>
          <Col>
            <Button><DownloadOutlined /></Button>
          </Col>
        </Row>
        <Row>
          <Col span={18}>
            <div className="flex justify-center gap-3 bg-[#f3f2f3] h-[100vh]">
              {/* <PDF /> */}
            </div>
          </Col>
          <Col span={6}>
            <MenuForm />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Dashboard;
