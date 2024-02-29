import { Button, Typography } from 'antd';
import { Col, Row } from 'antd';
import PDF from './components/PDF';
import MenuForm from './components/MenuForm';
import { DownloadOutlined, PrinterOutlined, ReloadOutlined, BarsOutlined } from '@ant-design/icons';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';

const Dashboard = () => {
  document.title = 'Dashboard | Velzon - React Admin & Dashboard Template';

  return (
    <>
      <div className="page-content">
        <Col>
          <Row style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Col>
              <Typography.Text style={{ fontWeight: 'bold', fontSize: 20 }}>Tạo mới hợp đồng</Typography.Text>
            </Col>
            <Row style={{ display: 'flex', gap: 5 }}>
              <PDFDownloadLink
                document={<PDF />}
                fileName={'hopdong_khoan'}>
                <Button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <DownloadOutlined />
                </Button>
              </PDFDownloadLink>
              <Button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <ReloadOutlined />
              </Button>
              <Button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <PrinterOutlined />
              </Button>
              <Button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <BarsOutlined />
              </Button>
            </Row>
          </Row>
          <Row style={{ paddingTop: 30, display: 'flex', justifyContent: 'center' }}>
            <PDFViewer
              width={800}
              height={740}
              showToolbar={false}>
              <PDF />
            </PDFViewer>
            <Col span={8}>
              <MenuForm />
            </Col>
          </Row>
        </Col>
      </div>
    </>
  );
};

export default Dashboard;
