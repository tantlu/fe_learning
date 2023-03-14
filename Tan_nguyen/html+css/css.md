# Summary
****
## Kích thước

- Pixel (px): Pixel là đơn vị đo lường tuyệt đối
- Percent (%): Đơn vị phần trăm được sử dụng để xác định kích thước tương đối của một thành phần so với kích thước của thành phần cha của nó
- Em (em): Em là một đơn vị đo lường tương đối và được sử dụng để đo kích thước của các thành phần dựa trên kích thước của font hiện tại của chúng. Ví dụ, nếu kích thước font hiện tại của một thành phần là 16px, thì 1em sẽ tương đương với 16px.
- Rem (rem): Rem là một đơn vị đo lường tương đối giống như em, tuy nhiên nó được tính dựa trên kích thước font của phần tử gốc (root) của trang web.
- vw (Chế độ xem chiều rộng): 10vw sẽ là 10% chiều rộng của chế độ xem. 
- vh (Chiều cao chế độ xem): 3vh sẽ là 3% chiều cao của chế độ xem. 
- vmin (Tối thiểu Viewport): 70vmin sẽ là 70% kích thước nhỏ hơn của chế độ xem (chiều cao hoặc chiều rộng). 
- vmax (tối đa chế độ xem): 100vmax sẽ là 100% kích thước lớn hơn của chế độ xem (chiều cao hoặc chiều rộng).
****
## Thứ bậc nhận css
1. style inline
2. *!important*
3. id
4. class
****
## background-linear
- Cú pháp: 
background: linear-gradient(gradient_direction, color 1, color 2, color 3, ...);

- gradient_direction : 90deg từ trái sang phải, 45deg từ trên xuống dưới
****
## box-shadow

- Cú pháp:

box-shadow: (**offset-x**, **offset-y**, **blur-radius**, **spread-radius**, **color**);
****
## transition

- animation-fill-mode: Xác định kiểu được áp dụng cho một phần tử khi hoạt hình đã hoàn tất.
- animation-iteration-count: kiểm soát số lần muốn lặp lại qua hoạt ảnh.
- transition-timing-function: 
    1. ease-out: sẽ làm cho hiệu ứng chuyển động bắt đầu nhanh hơn và kết thúc chậm dần.
    2. ease-in: sẽ làm cho hiệu ứng chuyển động bắt đầu chậm dần và di chuyển nhanh hơn ở giữa trước khi kết thúc chậm dần
    3. linear: sẽ làm cho hiệu ứng chuyển động di chuyển với tốc độ đều, không chậm dần hay nhanh hơn ở bất kỳ điểm nào
- cubic-bezier : vận tốc cho hiệu ứng chuyển động
    - là 1 grid có 4 điểm : P0(0,0),P1(x1,y1),P2(x2,y2),P3(1,1)
    - cú pháp : cubic-bezier(x1, y1, x2, y2)
## Applied Accessibility
- accesskey : chỉ định một phím tắt để truy cập nhanh đến một phần tử cụ thể trên trang web
****
## CSS Flexbox
### 1. display: flex
- options for *flex-direction* are *row-reverse* and *column-reverse*
- flex: 1 0 10px; will set the item to flex-grow: 1;, flex-shrink: 0;, and flex-basis: 10px;
****
## CSS Grid
- *column-gap*: khoảng cách
- *grid-column*: chỉ định vị trí bắt đầu và kết thúc của một phần tử trên trục ngang của lưới.
- *grid-gap*: xác định khoảng cách giữa các ô (grid cell) trong lưới (grid) <br>
grid-gap*: row-gap column-gap
- *align-self* được sử dụng để căn chỉnh các ô theo chiều dọc (các thuộc tính start, center, end)
- *justify-self* được sử dụng để căn chỉnh các ô theo chiều ngang 
- *grid-area*: áp dụng cho một phần tử con của phần tử chứa lưới. <br>
cú pháp : grid-area: row-start / column-start / row-end / column-end;
- *giới hạn size item*
<br> grid-template-columns: repeat(number column, minmax(minimum-value, maximum-value));
- *auto-fill và auto-fit*<br>
    1. auto-fill Nếu không đủ nội dung để điền đầy tất cả các ô, tự động chèn thêm các cột cho tới khi hết chỗ
    2. auto-fit Nếu không đủ nội dung để điền đầy tất cả các ô, thu gọn kích thước item cho phù hợp với vùng chứa 
****
## Border
Thuộc tính chỉ định loại viền để hiển thị.border-style

Các giá trị sau được cho phép:

- dotted - Xác định đường viền chấm
- dashed - Xác định đường viền đứt nét
- solid - Xác định một đường viền rắn
- double - Xác định đường viền kép
- groove - Xác định đường viền có rãnh 3D. Hiệu ứng phụ thuộc vào giá trị màu viền
- ridge - Xác định đường viền 3D ridged. Hiệu ứng phụ thuộc vào giá trị màu viền
- inset - Xác định đường viền 3D inset. Hiệu ứng phụ thuộc vào giá trị màu viền
- outset - Xác định đường viền bắt đầu 3D. Hiệu ứng phụ thuộc vào giá trị màu viền
- none - Xác định không có biên giới
- hidden - Xác định một đường viền ẩn
Thuộc tính có thể có từ một đến bốn giá trị (cho viền trên cùng, viền phải, viền dưới cùng và viền trái).
****
## CSS Links
- a:link - a normal
- a:visited - a link khi người dùng đã click
- a:hover - a link khi người dùng trỏ tới
- a:active - a link khi người dùng click
****
## table

- các đường viền của bảng thu lại thành 1 đường: 

`border-collapse: collapse;`
****
## Position
1. **Relative**

Một phần tử có `position: relative;` nó sẽ được di chuyển dựa trên vị trí của nó trên trang web bình thường, nhưng với khả năng di chuyển một số pixel lên xuống hoặc sang trái phải bằng cách sử dụng các thuộc tính `top`, `bottom`, `left`, `right`.
2. **Absolute**

Khi một phần tử có giá trị `position: absolute` được đặt trong một tài liệu HTML, nó sẽ được định vị tuyệt đối (vị trí chính xác) trên trang web, dựa trên vị trí của phần tử cha gần nhất có giá trị position khác với giá trị mặc định. Nếu không có phần tử cha nào có giá trị position khác với static, phần tử sẽ được định vị dựa trên thẻ `<body>` của trang.

Khi sử dụng `position: absolute`, phần tử có thể được di chuyển dựa trên tọa độ x và y bằng cách sử dụng các thuộc tính `top`, `bottom`, `left`, `right`

3. **sticky**

Khi sử dụng `position: sticky` được định vị tương đối cho đến khi một vị trí bù nhất định được đáp ứng trong chế độ xem - sau đó nó "dính" tại chỗ (như `position:fixed`).
****
## Z-index
Trong CSS, `z-index` là một thuộc tính được sử dụng để định vị các phần tử lên hoặc xuống trong lớp đồ họa 3 chiều trên trang web. Nó chỉ định độ sâu của một phần tử và quyết định phần tử đó sẽ được hiển thị phía trên hay phía dưới phần tử khác.
****
## CSS Align
****
## CSS Combinators

- `div p` : Chọn tất cả các phần tử `<p>` bên trong các phần tử `<div>`
- `div > p` : Chọn tất cả các phần tử `<p>` trong đó phần tử cha là phần tử `<div>`
- `div + p` : Chọn phần tử `<p>` đầu tiên được đặt ngay sau phần tử `<div>`
- `div ~ p` : Chọn mọi phần tử `<p>` đứng trước phần tử `<div>`
****
## CSS Pseudo-classes
1. `:hover:` Chọn phần tử khi rê chuột qua nó.
2. `:active:` Chọn phần tử khi đang được nhấn xuống.
3. `:focus:` Chọn phần tử khi được chọn bằng phím tab hoặc chuột.
4. `:nth-child(n):` Chọn phần tử con thứ n của một phần tử cha.
5. `:first-child:` Chọn phần tử đầu tiên là con của phần tử cha.
6. `:last-child:` Chọn phần tử cuối cùng là con của phần tử cha.
****
## CSS Pseudo-elements
-  là các phần tử ảo được thêm vào một phần tử thật để chọn một phần cụ thể của phần tử đó. Các pseudo-elements bắt đầu bằng hai dấu hai chấm (::)
1. `::before:` Thêm một phần tử ảo vào phần tử được chọn và đặt nó trước nội dung của phần tử đó
2. `::after:` Thêm một phần tử ảo vào phần tử được chọn và đặt nó sau nội dung của phần tử đó.
3. `::first-letter:` Chọn ký tự đầu tiên của phần tử được chọn.
4. `::first-line:` Chọn dòng đầu tiên của phần tử được chọn.
5. `::selection:` Chọn phần tử được chọn bởi người dùng.
****
## CSS Attribute Selectors

1. `[attribute]`: Chọn tất cả các phần tử có thuộc tính được chỉ định.
2. `[attribute="value"]`: Chọn tất cả các phần tử có thuộc tính được chỉ định và giá trị cụ thể.
3. `[attribute^="value"]`: Chọn tất cả các phần tử có thuộc tính được chỉ định và giá trị bắt đầu bằng chuỗi cụ thể.
4. `[attribute$="value"]`: Chọn tất cả các phần tử có thuộc tính được chỉ định và giá trị kết thúc bằng chuỗi cụ thể.
5. `[attribute*="value"]`: Chọn tất cả các phần tử có thuộc tính được chỉ định và giá trị chứa chuỗi cụ thể.
6. `[attribute~="value"]`: Chọn tất cả các phần tử có thuộc tính được chỉ định và giá trị chứa từ "value" trong danh sách giá trị phân tách bằng khoảng trắng.
7. `[attribute|="value"]`: Chọn tất cả các phần tử có thuộc tính được chỉ định và giá trị bắt đầu bằng "value" hoặc bắt đầu bằng "value" và tiếp theo là dấu gạch ngang.
****
## border-image-repeat
1. `stretch`: Kéo hình ảnh để phủ toàn bộ phần khung viền.
2. `repeat`: Lặp lại hình ảnh nguyên vẹn để phủ toàn bộ phần khung viền.
3. `round`: Lặp lại hình ảnh nguyên vẹn để phủ toàn bộ phần khung viền, nhưng co giãn hoặc thu nhỏ kích thước hình ảnh để phù hợp với kích thước phần khung viền.
4. `space`: Lặp lại hình ảnh nguyên vẹn để phủ toàn bộ phần khung viền, nhưng giữ nguyên kích thước hình ảnh và tạo ra khoảng trắng giữa các hình ảnh để phù hợp với kích thước phần khung viền.
5. `round space`: Tương tự như giá trị round, nhưng thêm khoảng trắng giữa các hình ảnh như giá trị space.

## background-origin
**xác định vị trí bắt đầu vẽ hình nền (background) cho phần tử.**
****
1. `padding-box`: Bắt đầu vẽ hình nền từ vùng padding của phần tử. Nói cách khác, hình nền sẽ được đặt bên trong phần padding của phần tử và không bao gồm khu vực border hay margin.
2. `border-box`: Bắt đầu vẽ hình nền từ vùng border của phần tử. Hình nền sẽ được đặt trên phần border của phần tử, nhưng không bao gồm khu vực margin.
3. `content-box`: Bắt đầu vẽ hình nền từ vùng nội dung của phần tử. Hình nền sẽ được đặt trên phần nội dung của phần tử và không bao gồm khu vực padding, border hay margin.
****
## background-clip
**để xác định phạm vi của hình nền (background) sẽ được hiển thị trên phần tử.**
1. `border-box`: Hình nền được hiển thị trên toàn bộ vùng border của phần tử.
2. `padding-box`: Hình nền được hiển thị trên vùng padding của phần tử.
3. `content-box`: Hình nền được hiển thị trên vùng nội dung của phần tử.
4. `text`: Hình nền được hiển thị trên văn bản của phần tử.