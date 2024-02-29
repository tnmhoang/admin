import { BarsOutlined, DownloadOutlined, PrinterOutlined, ReloadOutlined } from '@ant-design/icons';
import { BlobProvider, Document, PDFDownloadLink, PDFViewer, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import { Button, Col, DatePicker, Input, Menu, Row, Select, Space, Typography } from 'antd';
import { useState } from 'react';
import PDF from './components/PDF';
import Link from 'antd/es/typography/Link';

const { Option } = Select;


interface IDateFormat {
  date?: string;
  month?: string;
  year?: string;
}

const Dashboard = () => {
  document.title = 'Dashboard | Velzon - React Admin & Dashboard Template';

  const [isNameA, setIsNameA] = useState<string>();
  const [isNameB, setIsNameB] = useState<string>();
  const [isPositionA, setIsPositionA] = useState<string>();
  const [isDateCreate, setisDateCreate] = useState<IDateFormat>();
  const [isDateBirthA, setIsDateBirthA] = useState<IDateFormat>();
  const [isDateBirthB, setIsDateBirthB] = useState<IDateFormat>();
  const [isGender, setIsGender] = useState<string>();
  const [isNumberPhone, setIsNumberPhone] = useState<string>();
  const [isCCCDA, setIsCCCDA] = useState<string>();
  const [isCCCDB, setIsCCCDB] = useState<string>();
  const [isDateCCCDA, setIsDateCCCDA] = useState<IDateFormat>();
  const [isDateCCCDB, setIsDateCCCDB] = useState<IDateFormat>();
  const [isPlaceCCCDA, setIsPlaceCCCDA] = useState<string>();
  const [isPlaceCCCDB, setIsPlaceCCCDB] = useState<string>();

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
                document={<PDF
                  isNameA={isNameA}
                  isNameB={isNameB}
                  isPositionA={isPositionA}
                  isDateCreate={isDateCreate}
                  isDateBirthA={isDateBirthA}
                  isDateBirthB={isDateBirthB}
                  isGender={isGender}
                  isNumberPhone={isNumberPhone}
                  isCCCDA={isCCCDA}
                  isCCCDB={isCCCDB}
                  isDateCCCDA={isDateCCCDA}
                  isDateCCCDB={isDateCCCDB}
                  isPlaceCCCDA={isPlaceCCCDA}
                  isPlaceCCCDB={isPlaceCCCDB}
                />}
                fileName={'hopdong_khoan'}>
                <Button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <DownloadOutlined />
                </Button>
              </PDFDownloadLink>
              <Button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <ReloadOutlined />
              </Button>
              <BlobProvider document={<PDF
                isNameA={isNameA}
                isNameB={isNameB}
                isPositionA={isPositionA}
                isDateCreate={isDateCreate}
                isDateBirthA={isDateBirthA}
                isDateBirthB={isDateBirthB}
                isGender={isGender}
                isNumberPhone={isNumberPhone}
                isCCCDA={isCCCDA}
                isCCCDB={isCCCDB}
                isDateCCCDA={isDateCCCDA}
                isDateCCCDB={isDateCCCDB}
                isPlaceCCCDA={isPlaceCCCDA}
                isPlaceCCCDB={isPlaceCCCDB}
              />}>
                {({ url, blob }) => (
                  <Link href={url ? url : ''} target="_blank">
                    <PrinterOutlined size={14} />
                    <span>Print</span>
                  </Link>
                )}
              </BlobProvider>

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
              <PDF
                isNameA={isNameA}
                isNameB={isNameB}
                isPositionA={isPositionA}
                isDateCreate={isDateCreate}
                isDateBirthA={isDateBirthA}
                isDateBirthB={isDateBirthB}
                isGender={isGender}
                isNumberPhone={isNumberPhone}
                isCCCDA={isCCCDA}
                isCCCDB={isCCCDB}
                isDateCCCDA={isDateCCCDA}
                isDateCCCDB={isDateCCCDB}
                isPlaceCCCDA={isPlaceCCCDA}
                isPlaceCCCDB={isPlaceCCCDB}
              />
            </PDFViewer>
            <Col span={6}>
              <Menu
                style={{ width: '100%', overflow: 'auto', maxHeight: '740px', backgroundColor: '#f3f3f9', height: '100%' }}
                mode="inline">
                <Menu.SubMenu
                  title="Thông tin đầu mục "
                  key="infoGeneral">
                  <Col
                    span={24}
                    style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'start', padding: 8 }}>
                    <Typography.Text strong>Ngày làm hợp đồng</Typography.Text>
                    <DatePicker
                      format={'DD/MM/YYYY'}
                      placeholder="Chọn ngày làm hợp đồng"
                      style={{ width: '100%' }}
                      onChange={(value) => {
                        setisDateCreate({ date: value?.date().toString(), month: (value?.month()! + 1).toString(), year: value?.year().toString() });
                      }}
                    />
                  </Col>
                </Menu.SubMenu>
                <Menu.SubMenu
                  title="Thông tin bên A"
                  key="infoA">
                  <Col
                    span={24}
                    className="d-flex flex-column items-start p-2">
                    <Typography.Text strong>Người sử dụng lao động</Typography.Text>
                    <Input
                      placeholder="Họ và tên"
                      className="w-full"
                      onChange={(value) => setIsNameA(value.target.value)}
                    />
                    <Typography.Text strong>Chức vụ</Typography.Text>
                    <Select
                      className="w-full text-start"
                      defaultValue={'--Vui lòng chọn--'}
                      onSelect={(value) => {
                        setIsPositionA(value);
                      }}>
                      <Option value={'Chủ tịch'}>Chủ tịch</Option>
                      <Option value={'Giám đốc'}>Giám đốc</Option>
                      <Option value={'Phó Giám Đốc'}>Phó Giám Đốc</Option>
                    </Select>

                    <Typography.Text strong>Ngày sinh</Typography.Text>

                    <DatePicker
                      format={'DD/MM/YYYY'}
                      placeholder="Chọn ngày sinh"
                      className="w-100"
                      onChange={(value) => {
                        setIsDateBirthA({ date: value?.date().toString(), month: (value?.month()! + 1).toString(), year: value?.year().toString() });
                      }}
                    />
                    <Typography.Text strong>Số CCCD</Typography.Text>
                    <Input
                      onChange={(value) => setIsCCCDA(value.target.value)}
                      placeholder="Nhập số CCCD"
                    />
                    <Space
                      direction="vertical"
                      className="d-flex">
                      <Col
                        className="d-flex flex-column items-start "
                        span={24}>
                        <Typography.Text strong>Ngày cấp</Typography.Text>
                        <Row className="w-100">
                          <DatePicker
                            placeholder="Chọn ngày cấp"
                            format={'DD/MM/YYYY'}
                            className="w-100"
                            onChange={(value) => {
                              setIsDateCCCDA({ date: value?.date().toString(), month: (value?.month()! + 1).toString(), year: value?.year().toString() });
                            }}
                          />
                        </Row>
                      </Col>
                      <Col
                        className="d-flex flex-column items-start "
                        span={24}>
                        <Typography.Text strong>Nơi cấp</Typography.Text>
                        <Input
                          placeholder="Nhập nơi cấp"
                          onChange={(value) => {
                            setIsPlaceCCCDA(value.target.value);
                          }}
                        />
                      </Col>
                    </Space>
                  </Col>
                </Menu.SubMenu>
                <Menu.SubMenu
                  title="Thông tin bên B"
                  key="infoB">
                  <Col
                    span={24}
                    className="d-flex  flex-column items-start p-2">
                    <Typography.Text strong>Người cho thuê khoán</Typography.Text>
                    <Input
                      placeholder="Họ và tên"
                      className="w-full"
                      onChange={(value) => {
                        setIsNameB(value.target.value);
                      }}
                    />
                    <Space
                      direction="vertical"
                      style={{ display: 'flex' }}>
                      <Col className="d-flex flex-column items-start">
                        <Typography.Text strong>Giới tính</Typography.Text>
                        <Select
                          className=" text-start"
                          defaultValue={'--Vui lòng chọn--'}
                          onSelect={(value) => {
                            setIsGender(value);
                          }}>
                          <Option value={'Nam'}>Nam</Option>
                          <Option value={'Nữ'}>Nữ</Option>
                          <Option value={'Chưa rõ'}>Chưa rõ</Option>
                        </Select>
                      </Col>
                      <Col className="d-flex flex-column items-start">
                        <Typography.Text strong>Số điện thoại</Typography.Text>
                        <Input
                          placeholder="Nhập số điện thoại"
                          style={{ width: '100%' }}
                          onChange={(value) => setIsNumberPhone(value.target.value)}
                        />
                      </Col>
                    </Space>
                    <Typography.Text strong>Ngày sinh</Typography.Text>
                    <DatePicker
                      format={'DD/MM/YYYY'}
                      placeholder="Chọn ngày sinh"
                      onChange={(value) => {
                        setIsDateBirthB({ date: value?.date().toString(), month: (value?.month()! + 1).toString(), year: value?.year().toString() });
                      }}
                    />

                    <Typography.Text strong>Số CCCD</Typography.Text>
                    <Input
                      onChange={(value) => setIsCCCDB(value.target.value)}
                      placeholder="Nhập số CCCD"
                    />
                    <Space
                      direction="vertical"
                      className="d-flex">
                      <Col className="flex-flex-grow-1 items-start ">
                        <Typography.Text strong>Ngày cấp</Typography.Text>
                        <Row>
                          <DatePicker
                            placeholder="Chọn ngày cấp"
                            format={'DD/MM/YYYY'}
                            className="w-100"
                            onChange={(value) => {
                              setIsDateCCCDB({ date: value?.date().toString(), month: (value?.month()! + 1).toString(), year: value?.year().toString() });
                            }}
                          />
                        </Row>
                      </Col>
                      <Col className="flex-grow-1 items-start">
                        <Typography.Text strong>Nơi cấp</Typography.Text>
                        <Input
                          placeholder="Nhập nơi cấp"
                          onChange={(value) => {
                            setIsPlaceCCCDB(value.target.value);
                          }}
                        />
                      </Col>
                    </Space>
                  </Col>
                </Menu.SubMenu>
                <Menu.SubMenu
                  title="Thông tin điều 1"
                  key="info1"></Menu.SubMenu>
                <Menu.SubMenu
                  title="Thông tin điều 2"
                  key="info2"></Menu.SubMenu>
                <Menu.SubMenu
                  title="Thông tin điều 3"
                  key="info3"></Menu.SubMenu>
                <Menu.SubMenu
                  title="Thông tin điều 4"
                  key="info4"></Menu.SubMenu>
              </Menu>
            </Col>
          </Row>
        </Col>
      </div>
    </>
  );
};


const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    fontSize: 13,
    backgroundColor: 'white',
    fontFamily: 'NormalTime',

    paddingVertical: 40,
    paddingHorizontal: 70,
  },
  section: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    flexGrow: 1,
    lineHeight: 2,
  },
});

export default Dashboard;
