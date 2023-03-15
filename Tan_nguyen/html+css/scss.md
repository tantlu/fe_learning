# summary
****
## 
SCSS (Sass) là một ngôn ngữ mở rộng của CSS, hỗ trợ cung cấp nhiều tính năng hơn so với CSS truyền thống, bao gồm cả khai báo biến và hàm.

Các mục đích sử dụng của SCSS là:

1. Tăng tính modular và tái sử dụng của CSS: SCSS cho phép chia các phần tử và tính năng CSS thành các module riêng biệt, dễ quản lý và sử dụng lại ở nhiều nơi trong trang web.

2. Giảm thiểu code trùng lặp: SCSS cung cấp tính năng nesting giúp tạo ra một code CSS rõ ràng và ngắn gọn hơn, đồng thời giúp giảm thiểu việc sử dụng lại các đoạn code CSS giống nhau.

3. Tăng tính linh hoạt: SCSS cho phép sử dụng biến để lưu các giá trị như màu sắc, kích thước, độ rộng và áp dụng lại chúng ở nhiều vị trí khác nhau trên trang web, giúp tăng tính linh hoạt và giảm thời gian phát triển.

4. Tạo ra các animation và transition hiệu quả: SCSS cung cấp các tính năng animation và transition giúp tạo ra các hiệu ứng và chuyển động tốt hơn trong CSS.

5. Tăng tính tổ chức và bảo trì của code CSS: SCSS cho phép sử dụng mixin và inheritance để giúp quản lý code CSS trở nên dễ dàng hơn, giảm thiểu lỗi và tăng tính bảo trì của code.

Biến trong SCSS được sử dụng để lưu trữ giá trị và sử dụng lại nhiều lần trong file SCSS, giúp giảm thiểu việc lặp lại các giá trị và dễ dàng thay đổi giá trị của toàn bộ trang web.

Cú pháp khai báo biến trong SCSS:
```
$variable-name: value;
```
Ví dụ
```
$primary-color: #007bff;
```
- Hàm trong SCSS được sử dụng để tính toán và trả về giá trị mới dựa trên các giá trị đầu vào, giúp tăng tính linh hoạt trong việc xử lý các giá trị trong SCSS.

Cú pháp khai báo hàm trong SCSS:
```
@function function-name($parameter) {
  // code block
  @return value;
}
```
Ví dụ
```
@function divide($a, $b) {
  @return $a / $b;
}
```

- Các hàm tích hợp sẵn trong SCSS bao gồm:

1. `rgb()`: tạo màu sắc từ các giá trị RGB.
2. `rgba()`: tạo màu sắc từ các giá trị RGBA.
3. `lighten()`: làm sáng màu sắc.
4. `darken()`: làm tối màu sắc.
5. `saturate()`: làm đậm màu sắc.
6. `desaturate()`: làm nhạt màu sắc.
7. `mix()`: pha trộn hai màu sắc với nhau.

ví dụ
```
$primary-color: #007bff;

a {
  color: lighten($primary-color, 10%);
  background-color: mix($primary-color, #000, 20%);
}
```
****
## directive
1. `@import`: Sử dụng để nhập một file SCSS vào một file SCSS khác.
Ví dụ:

`@import 'base'; // import file base.scss`

2. `@extend`: Sử dụng để kế thừa các thuộc tính của một class hoặc một placeholder.
Ví dụ:

```
%button {
  background-color: red;
  color: white;
}

.submit-button {
  @extend %button; // kế thừa các thuộc tính từ placeholder %button
}
```

3. `@if, @else if, @else`: Sử dụng để thực hiện các điều kiện và lựa chọn.
Ví dụ:
```
$width: 600px;

@media screen and (max-width: 600px) {
  body {
    @if $width > 500px {
      font-size: 16px;
    } @else if $width > 400px {
      font-size: 14px;
    } @else {
      font-size: 12px;
    }
  }
}
```

4. `@for`: Sử dụng để tạo một vòng lặp.
Ví dụ:

```
@for $i from 1 through 3 {
  .box-#{$i} {
    width: 100px * $i;
  }
}
```
5. `@while`: Sử dụng để tạo một vòng lặp vô hạn.
Ví dụ:
```
$width: 100px;
$i: 1;

@while $i < 5 {
  .box-#{$i} {
    width: $width * $i;
  }
  $i: $i + 1;
}
```
6. `@mixin và @include`: Sử dụng để tạo một khối CSS có thể được tái sử dụng.
Ví dụ:
```
@mixin transform($property) {
  -webkit-transform: $property;
  -moz-transform: $property;
  -ms-transform: $property;
  transform: $property;
}

.box {
  @include transform(rotate(30deg));
}
```
7. `@function và @return`: Sử dụng để tạo một hàm CSS.
Ví dụ:
```
@function calculate-width($width, $padding) {
  @return $width + ($padding * 2);
}

.box {
  width: calculate-width(100px, 10px);
}
```
****
## khác biệt giữa SCSS variable và CSS variable
khác biệt giữa SCSS variable và CSS variable như sau:

1. Cú pháp:

- SCSS variable được khai báo bằng dấu $, ví dụ: `$primary-color: #007bff;`

- CSS variable được khai báo bằng dấu --, ví dụ: `--primary-color: #007bff;`

2. Thời gian định nghĩa:
- SCSS variable được định nghĩa tại thời điểm biên dịch, và được chuyển đổi thành CSS trước khi được trình duyệt tải.
- CSS variable được định nghĩa tại thời điểm tải trang, nghĩa là nó có thể được thay đổi hoặc áp dụng giá trị khác trong quá trình thực thi.
3. Scope:
- SCSS variable chỉ có thể được sử dụng trong phạm vi block mà nó được định nghĩa hoặc các block con của nó.
- CSS variable có thể được sử dụng ở bất kỳ đâu trong phạm vi tài liệu HTML.
4. Độ ưu tiên:
- SCSS variable có độ ưu tiên cao hơn so với CSS property thông thường, nghĩa là nó có thể ghi đè lên giá trị của các thuộc tính CSS khác trong cùng phạm vi áp dụng.
- CSS variable cũng có thể được ghi đè nhưng phải thông qua việc sử dụng selector cụ thể hoặc độ ưu tiên của CSS.

Ví dụ về SCSS variable:
```
// định nghĩa một số biến cho màu sắc và font-size
$primary-color: #007bff;
$secondary-color: #6c757d;
$font-size-md: 1.25rem;

// sử dụng biến trong khai báo CSS
body {
  font-size: $font-size-md;
}

.btn-primary {
  background-color: $primary-color;
  color: white;
}

.btn-secondary {
  background-color: $secondary-color;
  color: white;
}
```
Ví dụ về CSS Variable
```
// định nghĩa một số biến cho màu sắc và font-size
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --font-size-md: 1.25rem;
}

// sử dụng biến trong khai báo CSS
body {
  font-size: var(--font-size-md);
}

.btn-primary {
  background-color: var(--primary-color);
  color: white;
}

.btn-secondary {
  background-color: var(--secondary-color);
  color: white;
}

// sử dụng JavaScript để thay đổi giá trị biến trong thời gian chạy
document.documentElement.style.setProperty('--primary-color', '#ff0000');
```
Về mặt sử dụng, SCSS variable thường được dùng để quản lý các giá trị tĩnh như màu sắc, kích thước, độ rộng của các thành phần trong trang web. Trong khi đó, CSS variable thường được sử dụng để quản lý các giá trị động như kích thước của màn hình, trạng thái đăng nhập của người dùng.