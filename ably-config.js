// Cấu hình Ably cho trang game tĩnh (GitHub Pages).
//
// CHỈ điền key SUBSCRIBE-ONLY ở đây (capability: subscribe trên channel
// "tieng-trung-live"). Key này ai xem source trang cũng thấy được, nên TUYỆT ĐỐI
// KHÔNG dùng key publish/full ở đây — kẻ khác sẽ publish bình luận giả.
// Key publish chỉ nằm trong .env trên VM (server.js).
//
// Cách điền: thay chuỗi bên dưới, hoặc truyền qua URL:
// ?ablyKey=<key>&ablyChannel=tieng-trung-live
window.ABLY_CONFIG = {
  key: 'GVuKBw.SdBN7w:zEPXnY4R0RTWdExLONgX0MRKifW_tohtgrXEPI05ckw',
  channel: 'tieng-trung-live'
};
