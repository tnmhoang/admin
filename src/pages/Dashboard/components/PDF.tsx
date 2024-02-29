import { Document, Font, PDFViewer, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import React, { useState } from 'react';
import TimeRoman from '../times.ttf';
import { useDispatch, useSelector } from 'react-redux';

interface IDateFormat {
  date?: string;
  month?: string;
  year?: string;
}
Font.register({
  family: 'NormalTime',
  src: TimeRoman,
});

const PDF = () => {
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

  return (
    <Document
      pageLayout="twoPageRight"
      pageMode="useNone">
      <Page
        size="A4"
        style={styles.page}>
        <View style={styles.section}>
          <Text style={{ textTransform: 'uppercase' }}>Cộng hòa xã hội chủ nghĩa Việt Nam</Text>
          <Text style={{}}>Độc lập - Tự do - Hạnh phúc</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end', width: '100%', paddingVertical: 20 }}>
            <Text style={{ textAlign: 'right' }}>Nam Định, ngày</Text>
            <View style={{ width: 20, overflow: 'hidden', marginLeft: 3 }}>
              <Text>{isDateCreate?.date}</Text>
            </View>
            <Text>tháng</Text>
            <View style={{ width: 20, overflow: 'hidden', marginLeft: 3 }}>
              <Text>{isDateCreate?.month}</Text>
            </View>
            <Text>năm</Text>

            <Text style={{ marginLeft: 3 }}>{isDateCreate?.year}</Text>
          </View>
          <Text style={{ textTransform: 'uppercase', fontSize: 16 }}>HỢP ĐỒNG KHOÁN CÔNG VIỆC</Text>
          <Text>(Số:………/………/HĐKCV)</Text>
          <View style={{ marginTop: 30, lineHeight: 2 }}>
            <Text>BÊN THUÊ KHOÁN (điều 2): CÔNG TY CỔ PHẦN NAM TIỆP</Text>
            <Text>Địa chỉ: Lô 20+23+14 đường N2, Cụm CN An Xá, TP. Nam Định, tỉnh Nam Định</Text>
            <Text>MST: 0600337</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text>Ông (bà):</Text>
              <View style={{ minWidth: 150, paddingLeft: 5 }}>
                <Text>{isNameA}</Text>
              </View>
              <Text style={{ marginLeft: 10 }}>Chức vụ:</Text>
              <View style={{ width: 100, marginLeft: 5 }}>
                <Text>{isPositionA}</Text>
              </View>
              <Text>Sinh ngày:</Text>
              <View style={{ minWidth: 20, marginLeft: 5 }}>
                <Text>{isDateBirthA?.date} /</Text>
              </View>
              <View style={{ minWidth: 20 }}>
                <Text>
                  {isDateBirthA?.month} / {isDateBirthA?.year}
                </Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <Text>Số CMND/CCCD:</Text>
              <View style={{ width: 120 }}>
                <Text>{isCCCDA}</Text>
              </View>
              <Text>Ngày cấp:</Text>
              <View style={{ minWidth: 20, marginLeft: 5 }}>
                <Text>{isDateCCCDA?.date} /</Text>
              </View>
              <View style={{ minWidth: 50 }}>
                <Text>
                  {isDateCCCDA?.month} / {isDateCCCDA?.year}
                </Text>
              </View>
              <Text>Nơi cấp:</Text>
              <View style={{ minWidth: 100 }}>
                <Text>{isPlaceCCCDA}</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text>Sau đây gọi là "Công ty"</Text>
            </View>
            <Text>BÊN CHO THUÊ KHOÁN (BÊN B) </Text>

            <View style={{ flexDirection: 'row' }}>
              <Text>Ông (bà):</Text>
              <View style={{ minWidth: 150, paddingLeft: 5 }}>
                <Text>{isNameB}</Text>
              </View>
              <Text>Sinh ngày:</Text>
              <View style={{ minWidth: 20, marginLeft: 5 }}>
                <Text>{isDateBirthB?.date} /</Text>
              </View>
              <View style={{ minWidth: 100 }}>
                <Text>
                  {isDateBirthB?.month} / {isDateBirthB?.year}
                </Text>
              </View>
              <Text>Giới tính: {isGender}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text>Địa chỉ thường trú:</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text>Số CMND/CCCD:</Text>
              <View style={{ width: 120 }}>
                <Text>{isCCCDB}</Text>
              </View>
              <Text>Ngày cấp:</Text>
              <View style={{ minWidth: 20, marginLeft: 5 }}>
                <Text>{isDateCCCDB?.date} /</Text>
              </View>
              <View style={{ minWidth: 50 }}>
                <Text>
                  {isDateCCCDB?.month} / {isDateCCCDB?.year}
                </Text>
              </View>
              <Text>Tại: Cục Cảnh Sát {isPlaceCCCDB}</Text>
            </View>

            <Text>Số điện thoại: {isNumberPhone}</Text>
            <Text>Cùng ký kết hợp đồng giao khoán như sau:</Text>
            <Text>Điều 1: Nội dung khoán công việc</Text>
            <Text>Bên B thực hiện khoán công việc:</Text>
            <Text>Điều 2: Nơi làm việc</Text>
            <Text>Tại : Công ty Cổ phần Nam Tiệp </Text>
            <Text>Địa chỉ: Lô 20+23+24 đường N2, cụm CN An Xá, TP. Nam Định, tỉnh Nam Định</Text>
            <Text>Điều 3: Thời gian thực hiện hợp đồng</Text>
            <Text>Bên B thực hiện công việc ghi tại Điều 1</Text>
            <Text>Thời gian từ ngày …. tháng …. năm 20….. đến ngày …. tháng …. năm 20…..</Text>
            <Text>Điều 4: Thời gian làm việc </Text>
            <Text>Hai bên sẽ thống nhất thực hiện công việc khoán trong thời gian là 4 tháng</Text>
            <Text>Trường hợp có thay đổi sẽ thông báo cụ thể sau.</Text>
            <Text>Điều 5: Lương khoán và nghĩa vụ thuế</Text>
            <View style={{ flexDirection: 'row', gap: 20 }}>
              <Text>-</Text>
              <Text>Tiền lương khoán trọn gói: ………………….Vnđ cho 48 tiếng/tuần, 26 ngày công/tháng (Bằng chữ: ……………………………………………………………………….. đồng)</Text>
            </View>
            <View style={{ flexDirection: 'row', gap: 20 }}>
              <Text>-</Text>
              <Text>
                Thời hạn trả lương: Mỗi tháng theo lịch, hai bên sẽ đánh giá chất lượng công việc của bên B và tiến hành thanh toán tiền cho bên B.
              </Text>
            </View>
            <Text>Số tiền bên A chi trả cho bên B mỗi tháng nếu công việc đảm bảo yêu cầu gồm:</Text>
            <View style={{ flexDirection: 'row', gap: 20 }}>
              <Text>+</Text>
              <Text>
                Tiền lương khoán: tiền lương khoán trọn gói đã bao gồm các khoản tiền lương và tiền chế độ chính sách theo quy định của nhà nước mà
                người sử dụng lao động phải nộp cho người lao động, các khoản tiền khác theo quy định đã được thanh toán cho Nhà nước theo quy định và
                khả năng của mình.
              </Text>
            </View>
            <Text>
              Trường hợp trách nhiệm của công ty phải nộp hoặc thu hộ để đóng, nộp theo quy định của Nhà nước thì công ty phải nộp hoặc thu hộ để
              đóng, nộp theo quy định của Nhà nước thì công ty sẽ thu lại khoản tiền của người lao động (khoản tiền này là tiền của công ty phải đóng
              cho người lao động và người lao động phải đóng, nộp cho Nhà nước theo quy định) để nộp cho nhà nước{' '}
            </Text>
            <Text>+ Tiền thưởng và các khoản thanh toán khác (nếu có)</Text>
            <Text>Điều 6: Quyền lợi và nghĩa vụ vủa bên A</Text>
            <Text>● Quyền lợi:</Text>
            <Text>- Yêu cầu bên B thực hiện đúng phần công việc đã được ghi tại Điều 1, trong thời gian tại Điều 3, Điều 4 của Hợp đồng này</Text>
            <Text>
              - Yêu cầu bên B bồi thường thiệt hại nếu trong quá trình thực hiện công việc làm hỏng hóc, thất thoát, thiệt hại tài sản của bên A
            </Text>
            <Text>
              - Chấm dứt hợp đồng trước thời hạn trong trường hợp bên B thường cuyên không hoàn thành công việc, hoặc các trường hợp khác theo quy
              định của Pháp luật
            </Text>
            <Text>● Nghĩa vụ: </Text>
            <Text>- Thanh toán đầy đủ số tiền lương khoán </Text>
            <Text>Điều 7: Quyền lợi và nghĩa vụ của bên B</Text>
            <Text>● Quyền lợi</Text>
            <Text>- Được cấp phát công cụ cần thiết để hỗ trợ công việc</Text>
            <Text>- Được trả lương theo quy định tại Điều 4 khi hoàn thành công việc ghi tại Điều 1 của Hợp đồng này</Text>
            <Text>- Được từ chối làm việc khi thấy không an toàn lao động hoặc không tuân thủ quy định của Pháp luật</Text>
            <Text>- Chấm dứt hợp đồng theo quy định của Pháp luật</Text>
            <Text>● Nghĩa vụ:</Text>
            <Text>- Thực hiện đúng công việc đã ghi tại Điều 1 của Hợp đồng này</Text>
            <Text>- Hoàn thành và đảm bảo chất lượng công việc theo lịch phân công của Tổ</Text>
            <Text>
              - Tuân thủ các nội quy, quy định, thỏa ước lao động tập thể của bên A và quy định của pháp luật trong quá trình thực hiện công việc
            </Text>
            <Text>Điều 8: Điều khoản chung</Text>
            <Text>
              - Hai bên xác nhận việc giao kết hợp đồng là hoàn toàn tự nguyện, không bị lừa dối hoặc ép buộc. Hai bên có đầy đủ năng lực pháp lý theo
              quy định của pháp luật để ký kết và thực hiện Hợp đồng này
            </Text>
            <Text>- Hợp đồng này có hiệu lực kể từ ngày ký và tự động thanh lý khi hai bên đã hoàn thành trách nhiệm với nhau</Text>
            <Text>- Hợp đồng này được lập thành 02 bản bằng tiếng Việt có hiệu lực pháp lý như nhau, mỗi bên giữ 01 bản làm căn cứ thực hiện</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
            <Text>ĐẠI DIỆN BÊN A</Text>
            <Text>ĐẠI DIỆN BÊN B</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PDF;
