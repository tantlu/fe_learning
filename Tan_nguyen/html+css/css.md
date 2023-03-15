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

****
## CSS box model
gồm bốn thành phần chính:

1. `Content`: Là phần nội dung của phần tử HTML, bao gồm các văn bản, hình ảnh, video, hoặc bất kỳ thứ gì hiển thị bên trong phần tử đó.

2. `Padding`: Là khoảng cách giữa lề ngoài của phần tử và nội dung bên trong. Padding giúp tạo ra khoảng trắng xung quanh nội dung của phần tử.

3. `Border`: Là đường viền xung quanh phần tử. Nó có thể có độ dày, kiểu, màu sắc khác nhau, giúp phân tách phần tử ra khỏi các phần tử khác trên trang web.

4. `Margin`: Là khoảng cách giữa lề ngoài của phần tử và các phần tử khác xung quanh nó. Margin giúp tạo ra khoảng cách giữa các phần tử trên trang web.
****
## Biến và function trong CSS
1. **Biến**

Biến cho phép bạn lưu trữ giá trị và sử dụng lại chúng trong nhiều định dạng CSS khác nhau. Điều này giúp cho việc sửa đổi và cập nhật CSS trở nên dễ dàng hơn. Biến được khai báo bằng cách sử dụng từ khóa -- và có thể được gọi bằng cách sử dụng hàm var(). Ví dụ:

`:root {--primary-color: #007bff;}`

`button {background-color: var(--primary-color);}`

 biến `--primary-color` được khai báo trong selector `:root` và được sử dụng trong selector `button` thông qua hàm `var()`

2. Function

Là các hàm được sử dụng để thực hiện các tính toán hoặc xử lý giá trị đầu vào và trả về kết quả trong CSS. Có nhiều loại function khác nhau trong CSS, bao gồm các hàm tính toán số, chuyển đổi màu sắc và định dạng văn bản.

- `calc()`: function được sử dụng để tính toán giá trị số trong CSS. Ví dụ:

`.box {
  width: calc(50% - 20px);
  height: calc(100vh - 50px);
}`
- `rgba()`: function được sử dụng để định nghĩa màu sắc trong CSS, bao gồm màu sắc và độ trong suốt. Ví dụ:

`.box {
  background-color: rgba(255, 255, 255, 0.8);
}`
- `linear-gradient()`: function được sử dụng để tạo gradient tuyến tính trong CSS. Ví dụ:

`.box {
  background-image: linear-gradient(to bottom right, #ff0000, #0000ff);
}`
- `url()`: function được sử dụng để chèn hình ảnh hoặc tập tin âm thanh vào tài liệu HTML. Ví dụ:

`.box {
  background-image: url('path/to/image.jpg');
}`
- `attr()`: function được sử dụng để trích xuất giá trị của thuộc tính HTML và sử dụng nó trong CSS. Ví dụ:

`a::before {
  content: attr(href);
}`
- `var()`: function được sử dụng để sử dụng giá trị của biến CSS. Ví dụ:

`:root {
  --primary-color: #007bff;
}`

`button {
  background-color: var(--primary-color);
}`

- Ngoài các function trên, còn có nhiều function khác trong CSS như `transform(), scale(), rotate()`...và nhiều hơn nữa.
****
## transitions và animations

1. Transitions cho phép bạn tạo một hiệu ứng chuyển động mượt mà khi một thuộc tính của phần tử thay đổi giá trị

Cấu trúc của transition trong CSS được định nghĩa bằng thuộc tính transition, và bao gồm các giá trị sau:


```
transition: <property> <duration> <timing-function> <delay>;
```
Trong đó:

- `<property>`: Tên thuộc tính CSS mà bạn muốn áp dụng hiệu ứng chuyển động, ví dụ như background-color, opacity, transform,...
- `<duration>`: Thời gian mà hiệu ứng chuyển động diễn ra, được định nghĩa bằng giá trị số kèm đơn vị thời gian như s (giây) hoặc ms (mili giây).
- `<timing-function>`: Hàm xác định cách hiệu ứng chuyển động được thực hiện trong quá trình thay đổi giá trị của thuộc tính. Các giá trị phổ biến bao gồm ease (mặc định), linear, ease-in, ease-out, và ease-in-out. Bạn cũng có thể sử dụng hàm cubic-bezier để tạo ra các hiệu ứng chuyển động phức tạp hơn.
- `<delay>`: Thời gian chờ trước khi bắt đầu hiệu ứng chuyển động, cũng được định nghĩa bằng giá trị số kèm đơn vị thời gian.

2. Animations cho phép bạn tạo ra các hiệu ứng chuyển động phức tạp hơn bằng cách sử dụng các keyframe và một loạt các thuộc tính animation khác nhau.
- Định nghĩa `keyframes`: keyframes để mô tả các trạng thái của hiệu ứng chuyển động. Mỗi keyframe bao gồm một tên và một tập hợp các quy tắc CSS để áp dụng cho phần tử trong trạng thái đó. Các keyframes có thể được định nghĩa bằng cách sử dụng @keyframes rule trong CSS.
```
@keyframes move {
  from {transform: translateX(0);}
  to {transform: translateX(100px);}
}
```
định nghĩa một keyframe có tên là move. Keyframe này sử dụng thuộc tính transform để di chuyển phần tử từ vị trí hiện tại đến vị trí 100px bên phải.

Sau khi định nghĩa các keyframes, bạn có thể áp dụng animation cho phần tử HTML bằng cách sử dụng thuộc tính animation trong CSS.

Cấu trúc của thuộc tính animation như sau:
```
animation: <animation-name> <animation-duration> <animation-timing-function> <animation-delay> <animation-iteration-count> <animation-direction> <animation-fill-mode> <animation-play-state>;
```
Trong đó, các giá trị được sử dụng như sau:

- `<animation-name>`: Tên của keyframe mà bạn muốn sử dụng cho animation.
- `<animation-duration>`: Thời gian mà animation diễn ra, được định nghĩa bằng giá trị số kèm đơn vị thời gian như s (giây) hoặc ms (mili giây).
- `<animation-timing-function>`: Hàm xác định cách animation được thực hiện trong quá trình thay đổi giá trị của thuộc tính. Các giá trị phổ biến bao gồm `ease` (mặc định), `linear`, `ease-in`, `ease-out`, và `ease-in-out`. Bạn cũng có thể sử dụng hàm `cubic-bezier` để tạo ra các animation phức tạp hơn.
- `<animation-delay>`: Thời gian chờ trước khi bắt đầu animation.
- `<animation-iteration-count>`: Số lần lặp lại animation, hoặc giá trị infinite để lặp vô hạn.

=> Transition được sử dụng để tạo các hiệu ứng chuyển động mượt mà cho một thuộc tính khi giá trị của nó thay đổi, trong khi Animation được sử dụng để tạo các hiệu ứng chuyển động phức tạp hơn bằng cách sử dụng các keyframe và thuộc tính animation khác nhau. 
****
## Animate 1 HTML tag
sử dụng CSS Transitions hoặc CSS Animations.
1. Sử dụng CSS Transitions, bạn có thể định nghĩa các hiệu ứng chuyển động cho một số thuộc tính của phần tử, ví dụ như màu nền, kích thước, vị trí, độ mờ, độ trong suốt, ... Khi giá trị của thuộc tính thay đổi, các hiệu ứng chuyển động được định nghĩa trong transition sẽ được áp dụng vào phần tử đó. Ví dụ:

```
button {
  background-color: blue;
  color: white;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
}

button:hover {
  background-color: red;
  color: black;
} 
```

2. Sử dụng CSS Animations, bạn có thể tạo ra các hiệu ứng chuyển động phức tạp hơn bằng cách sử dụng các keyframe và một loạt các thuộc tính animation khác nhau. Khi bạn định nghĩa một animation, bạn có thể chỉ định các bước cụ thể của quá trình chuyển động của phần tử, ví dụ như tăng kích thước, xoay, thay đổi màu sắc, thay đổi vị trí, ... Ví dụ
```
@keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-10px); }
  50% { transform: translateX(10px); }
  75% { transform: translateX(-10px); }
  100% { transform: translateX(0); }
}

button {
  animation: shake 0.5s infinite;
}

```
****
## Responsive Web Design là gì? mục đích sử dụng

Responsive Web Design (RWD) là một phương pháp thiết kế website cho phép trang web có thể thích ứng với các thiết bị và kích thước màn hình khác nhau của người dùng, bao gồm máy tính, laptop, smartphone, tablet, v.v. Mục đích của RWD là tạo ra một trang web có trải nghiệm người dùng tốt trên mọi thiết bị và mọi kích thước màn hình.

2 kỹ thuật RWD hiện nay
1. Media Queries:
Media Queries là một kỹ thuật CSS cho phép kiểm tra và phản ứng với các đặc điểm của màn hình như chiều rộng, chiều cao, tỷ lệ khung hình, hướng dọc hoặc ngang, v.v. Nó cho phép bạn thay đổi cách hiển thị trang web của mình dựa trên các điều kiện đó. 

Cấu trúc của Media Queries:
```
@media only screen and (max-width: 600px) {
  /* CSS code here */
}
```
Trong đó:

- `@media` là từ khóa định nghĩa một media query.
- `only screen` chỉ định loại thiết bị sử dụng, ở đây là màn hình.
- `(max-width: 600px)` chỉ định điều kiện, ở đây là kích thước màn hình tối đa là 600px.
- `{}` chứa tất cả các thuộc tính CSS được áp dụng khi media query được kích hoạt.

2. Flexible Grids:
Flexible Grids là một kỹ thuật cho phép bạn tạo ra các lưới linh hoạt để phù hợp với các kích thước màn hình khác nhau. Với flexible grids, các kích thước cột và các khoảng cách giữa chúng có thể thay đổi theo tỷ lệ phần trăm thay vì kích thước cố định. Điều này giúp trang web của bạn có thể thích ứng với các kích thước màn hình khác nhau một cách linh hoạt hơn.

Các kỹ thuật này có thể được sử dụng với các phương pháp khác để tạo ra trang web đáp ứng như sử dụng đơn giản hóa các thành phần trên trang web và sử dụng các hình ảnh linh hoạt.
****
## Giải thích 2 mô hình RWD mobile first, desktop first

1. Mobile First 

là một phương pháp thiết kế trang web bắt đầu từ thiết kế cho thiết bị di động trước, sau đó mới dần điều chỉnh để phù hợp với các kích thước màn hình lớn hơn. Phương pháp này có ý nghĩa đặc biệt trong thời đại di động khi số lượng người truy cập internet qua điện thoại di động tăng đáng kể.

Với phương pháp Mobile First, thiết kế được tập trung vào các phương tiện cho thiết bị di động trước. Vì màn hình di động có kích thước nhỏ hơn so với các thiết bị khác, điều này sẽ yêu cầu thiết kế sử dụng các hình ảnh nhỏ hơn, đơn giản hóa các thành phần trang web và tối ưu hóa các tính năng của trang web. Sau đó, khi thiết kế được cải thiện, nó sẽ được mở rộng để phù hợp với các kích thước màn hình lớn hơn.

Ví dụ, trang web Pinterest được thiết kế theo phương pháp Mobile First. Trang web này được thiết kế cho thiết bị di động trước vì đây là nơi mà người dùng sử dụng Pinterest nhiều nhất. Thiết kế sử dụng các hình ảnh nhỏ hơn và bố cục tối giản hóa để trang web tải nhanh hơn trên các thiết bị di động. Sau đó, khi trang web được mở rộng lên các kích thước màn hình lớn hơn, các hình ảnh được tải lên độ phân giải cao hơn và bố cục được tối ưu hóa cho các kích thước màn hình lớn hơn.

2. Desktop first 

là một phương pháp thiết kế Responsive Web Design (RWD) bắt đầu từ bố cục trên các thiết bị lớn hơn, chẳng hạn như máy tính để bàn, và sau đó thêm các phương tiện truyền thông trên các thiết bị nhỏ hơn, chẳng hạn như điện thoại di động.

Với phương pháp này, các phương tiện truyền thông được tạo ra để chạy trên các thiết bị lớn hơn đầu tiên. Sau đó, khi thiết kế được hoàn thành cho các thiết bị lớn hơn, các quyết định thiết kế được thực hiện để chuyển đổi các phương tiện truyền thông sang các thiết bị nhỏ hơn.

Ví dụ, khi thiết kế một trang web desktop first, bạn có thể thiết kế trang web của mình với một bố cục rộng, sử dụng nhiều cột, hình ảnh lớn và phương tiện truyền thông khác. Khi thiết kế hoàn thành, bạn sẽ sử dụng các media queries để chuyển đổi các phương tiện truyền thông sang thiết bị di động.