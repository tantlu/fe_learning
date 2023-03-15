# summary
Target : chỉ định nơi mở liên kết
****
## Change text direction.

- Make the text below go right-to-left.

`<bdo dir="rtl">
What a beautiful day!
</bdo>`
- Các chữ cái "WHO" trong văn bản dưới đây là chữ viết tắt của "Tổ chức Y tế Thế giới". Sử dụng phần tử HTML để cung cấp chữ viết tắt được chỉ định của "WHO"

`<p>The <abbr title="World Health Organization"> WHO</abbr> was founded in 1948.</p>`
****
## Table
- add Caption `<caption>Names</caption>`
- Sử dụng `colspan` để làm cho phần tử TH đầu tiên kéo dài hai cột.
`<th 
colspan="2">Name</th>`
- Tương tự dùng `rowspan` để kéo dài 2 hàng
****
## List
- Sử dụng CSS để hiển thị kiểu khác nhau cho đầu dòng item.
`list-style-type:<kiểu hiển thị>`
<br>Trong đó:

`disc` - kiểu default

`circle` - hình tròn

`square` - hình vuông

`none` - không kiểu
- các kiểu hiển thị khác nhau cho đầu dòng item.
`type="1"` - kiểu default
`type="A"` - Chữ in hoa
`type="I"` - Chữ la mã in hoa
`type="a"` - Chữ thường
`type="i"` - Chữ la mã thường
****
## Self closing tag
Self-closing tag (thẻ tự đóng) là một thẻ HTML hoặc XML không cần đóng bằng một thẻ đóng riêng biệt. Thay vào đó, thẻ tự đóng kết thúc bằng dấu "/>" ngay sau thẻ mở.

Self closing tag phổ biến
1. `<br>`: Thẻ ngắt dòng, được sử dụng để tạo ra một dòng trống mới.
2. `<hr>`: Thẻ ngang, được sử dụng để tạo ra một đường kẻ ngang trên trang.
3. `<img>`: Thẻ hình ảnh, được sử dụng để chèn một hình ảnh vào trang.
4. `<input>`: Thẻ nhập liệu, được sử dụng để tạo ra một ô nhập liệu cho người dùng.
5. `<link>`: Thẻ liên kết, được sử dụng để liên kết đến một tài liệu khác.
6. `<meta>`: Thẻ thông tin, được sử dụng để cung cấp thông tin về trang web.
7. `<area>`: Thẻ khu vực, được sử dụng để xác định một khu vực có liên kết trên một bản đồ hình ảnh.
8. `<base>`: Thẻ cơ sở, được sử dụng để xác định URL cơ sở cho trang web.
9. `<col>`: Thẻ cột, được sử dụng để xác định thuộc tính của một cột trong bảng.
10. `<param>`: Thẻ tham số, được sử dụng để cung cấp thông tin cho một đối tượng nhúng.
******
## HTML attributes
**HTML attributes** là các đặc tính được sử dụng để cung cấp thông tin bổ sung về các phần tử HTML. Thuộc tính HTML có thể được sử dụng để thêm các thông tin như màu sắc, kích thước, liên kết, văn bản, hình ảnh, định dạng, v.v. vào các phần tử HTML.

Dưới đây là một số thuộc tính HTML phổ biến và cách sử dụng của chúng:

1. `id`: Định danh một phần tử HTML với một giá trị duy nhất. Ví dụ: `<div id="header">`.
2. `class`: Định nghĩa một lớp CSS cho phần tử HTML. Ví dụ: `<div class="container">`.
3. `style`: Xác định một tập hợp các thuộc tính CSS cho phần tử HTML. Ví dụ: `<div style="color:red;">`.
4. `src`: Chỉ định URL của tài nguyên bao gồm hình ảnh, video, âm thanh, v.v. Ví dụ: `<img src="image.jpg">`.
5. `href`: Chỉ định URL của một liên kết. Ví dụ: `<a href="http://example.com">`.
6. `title`: Cung cấp một chú thích hoặc tiêu đề cho phần tử HTML. Ví dụ: `<a href="#" title="Click here">`.
7. `alt`: Chỉ định văn bản thay thế khi hình ảnh không thể được hiển thị. Ví dụ: `<img src="image.jpg" alt="example">`.
8. `width, height`: Xác định kích thước của hình ảnh hoặc video. Ví dụ: `<img src="image.jpg" width="100" height="100">`.
9. `target`: Chỉ định cách mở liên kết (trong cùng một cửa sổ, cửa sổ mới, v.v.). Ví dụ: `<a href="#" target="_blank">`.
10. `rel`: Xác định mối quan hệ giữa liên kết và trang hiện tại. Ví dụ: `<a href="#" rel="nofollow">`.
*****
## Các hệ màu trong HTML và HTML styling
1. RGB (Red,Green,Blue) : giá trị mỗi màu trải từ 0-255
2. Hex : bắt đầu bằng dấu # theo sau là 6 chữ số được sử dụng để đại diện cho giá trị của mỗi màu
*****
## HTML semantic
HTML semantic là cách sử dụng các thẻ HTML theo ý nghĩa, mục đích của chúng để tạo ra một trang web có cấu trúc logic, dễ đọc và hiểu.

Việc sử dụng các thẻ HTML semantic giúp cho các công cụ tìm kiếm và các trình duyệt web hiểu được nội dung của trang web, giúp cho trang web dễ dàng được đánh giá, tối ưu hóa cho SEO, tăng trải nghiệm của người dùng và cải thiện khả năng đọc mã nguồn của nhà phát triển.

Các thẻ HTML semantic được chia theo các danh mục chính sau:

1. Thẻ tiêu đề: `<h1>, <h2>, <h3>, <h4>, <h5>, <h6>`

2. Thẻ phần nội dung: `<header>, <nav>, <main>, <section>, <article>, <aside>, <footer>`

3. Thẻ danh sách: `<ul>, <ol>, <li>`

4. Thẻ định nghĩa: `<dl>, <dt>, <dd>`

5. Thẻ bảng: `<table>, <th>, <tr>, <td>`

6. Thẻ định dạng: `<strong>, <em>, <blockquote>, <cite>, <q>`

7. Thẻ hình ảnh và phương tiện: `<img>, <video>, <audio>, <figure>, <figcaption>`

8. Thẻ liên kết và biểu tượng: `<a>, <i>, <button>, <input>, <label>`

9. Thẻ biểu mẫu: `<form>, <fieldset>, <legend>, <input>, <select>, <option>, <textarea>, <button>, <label>`

10. Thẻ khu vực: `<map>, <area>`
****
## HTML charset là gì? mục đích sử dụng
 HTML charset định nghĩa bộ mã ký tự được sử dụng để hiển thị văn bản trên trang web.
 Định nghĩa charset qua thẻ meta

 `<meta charset="UTF-8">` 

 ngoài ra còn các charset khác như ISO-8859-1: Là bộ mã ký tự Latin-1, Shift JIS, EUC-KR, GB2312
****
## 

