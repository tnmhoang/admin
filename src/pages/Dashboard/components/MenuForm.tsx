import { Col, DatePicker, Input, Menu, Row, Select, Space, Typography } from 'antd';
import { useState } from 'react';

interface IDateFormat {
  date?: string;
  month?: string;
  year?: string;
}

const { Option } = Select;

const MenuForm = () => {
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

  const { Option } = Select;

  return (
    <>
      <Menu
        style={{ width: 300, overflow: 'auto', maxHeight: '740px', backgroundColor: '#f3f3f9', height: '100%' }}
        mode="inline">
        <Menu.SubMenu
          title="Thông tin đầu mục "
          key="infoGeneral">
          <Col
            span={24}
            style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'start', padding: 8 }}>
            <Typography.Text>Ngày làm hợp đồng</Typography.Text>
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
            <Typography.Text>Người sử dụng lao động</Typography.Text>
            <Input
              placeholder="Họ và tên"
              className="w-full"
              onChange={(value) => setIsNameA(value.target.value)}
            />
            <Typography.Text>Chức vụ</Typography.Text>
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

            <Typography.Text>Ngày sinh</Typography.Text>

            <DatePicker
              format={'DD/MM/YYYY'}
              placeholder="Chọn ngày sinh"
              className="w-100"
              onChange={(value) => {
                setIsDateBirthA({ date: value?.date().toString(), month: (value?.month()! + 1).toString(), year: value?.year().toString() });
              }}
            />
            <Typography.Text>Số CCCD</Typography.Text>
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
                <Typography.Text>Ngày cấp</Typography.Text>
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
                <Typography.Text>Nơi cấp</Typography.Text>
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
            <Typography.Text>Người cho thuê khoán</Typography.Text>
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
                <Typography.Text>Giới tính</Typography.Text>
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
                <Typography.Text>Số điện thoại</Typography.Text>
                <Input
                  placeholder="Nhập số điện thoại"
                  style={{ width: '100%' }}
                  onChange={(value) => setIsNumberPhone(value.target.value)}
                />
              </Col>
            </Space>
            <Typography.Text>Ngày sinh</Typography.Text>
            <DatePicker
              format={'DD/MM/YYYY'}
              placeholder="Chọn ngày sinh"
              onChange={(value) => {
                setIsDateBirthB({ date: value?.date().toString(), month: (value?.month()! + 1).toString(), year: value?.year().toString() });
              }}
            />

            <Typography.Text>Số CCCD</Typography.Text>
            <Input
              onChange={(value) => setIsCCCDB(value.target.value)}
              placeholder="Nhập số CCCD"
            />
            <Space
              direction="vertical"
              className="d-flex">
              <Col className="flex-flex-grow-1 items-start ">
                <Typography.Text>Ngày cấp</Typography.Text>
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
                <Typography.Text>Nơi cấp</Typography.Text>
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
    </>
  );
};

export default MenuForm;
