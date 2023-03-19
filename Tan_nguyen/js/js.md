# summary

****
## Event
- With single quotes:

`<element event='some JavaScript'>`

- With double quotes:

`<element event="some JavaScript">`

list of some common HTML events

- `onchange` Một phần tử HTML đã được thay đổi
- `onclick` Người dùng nhấp chuột vào một phần tử HTML
- `onmouseover` Người dùng di chuyển chuột qua một phần tử HTML
- `onmouseout` Người dùng di chuyển chuột khỏi một phần tử HTML
- `onkeydown` Người dùng nhấn một phím trên bàn phím
- `onload` Trình duyệt đã hoàn tất tải trang
****
## Hoisting

Hoisting là một tính năng trong JavaScript cho phép khai báo biến và hàm được di chuyển lên đầu phạm vi của chúng trước khi chương trình thực hiện các lệnh trong phạm vi đó. Cụ thể, các khai báo biến và hàm được đưa lên đầu của phạm vi chứ không phải được thực hiện trong thứ tự ghi vào mã nguồn.

## conditional statements (Câu lệnh điều kiện)

1. `if`: Kiểm tra điều kiện và thực hiện một khối lệnh nếu điều kiện đúng.
Ví dụ:
```
if (x > 5) {
  console.log("x is greater than 5");
}
```
2. `if...else`: Kiểm tra điều kiện và thực hiện một khối lệnh nếu điều kiện đúng và thực hiện một khối lệnh khác nếu điều kiện sai.
Ví dụ:
```
if (x > 5) {
  console.log("x is greater than 5");
} else {
  console.log("x is less than or equal to 5");
}
```
3. `if...else if...else`: Kiểm tra nhiều điều kiện và thực hiện các khối lệnh tương ứng với điều kiện đúng.
Ví dụ:
```
if (x > 5) {
  console.log("x is greater than 5");
} else if (x === 5) {
  console.log("x is equal to 5");
} else {
  console.log("x is less than 5");
}
```
4. `switch`: Kiểm tra giá trị của biểu thức và thực hiện các khối lệnh tương ứng với giá trị đó.
Ví dụ:
```
switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  //...
  default:
    console.log("Invalid day");
}
```
Trong đó, `break` được sử dụng để kết thúc khối lệnh của mỗi trường hợp. Nếu không có `break`, khối lệnh của các trường hợp khác sẽ được thực thi.

****
## Prototype và prototype inheritance(cần bổ sung)
Trong JavaScript, mọi đối tượng đều có một thuộc tính prototype, Nó cho phép một object kế thừa các đặc tính của object khác thông qua prototype inheritance1. Bản thân prototype cũng là một object và chứa các thuộc tính và phương thức mà object có thể kế thừa2.

Prototype inheritance trong JavaScript cho phép đối tượng con thừa kế các thuộc tính và phương thức của đối tượng cha thông qua prototype của nó. Khi một thuộc tính hoặc phương thức được gọi trên một đối tượng, JavaScript trước tiên kiểm tra xem đối tượng đó có thuộc tính hoặc phương thức đó không. Nếu không, nó sẽ tìm kiếm trong prototype của đối tượng đó. Nếu prototype cũng không có, nó sẽ tìm kiếm trong prototype của prototype và tiếp tục như vậy cho đến khi nó tìm thấy thuộc tính hoặc phương thức đó hoặc đến khi không còn prototype nào để tìm kiếm.
****
## Các kiểu dữ liệu trong JS

Trong JavaScript, có sáu kiểu dữ liệu cơ bản được chia thành hai loại: kiểu dữ liệu nguyên thủy (*primitive data type*) và kiểu dữ liệu phức tạp (*complex data type*).

Kiểu dữ liệu nguyên thủy:

- `Number`: Kiểu dữ liệu số, bao gồm các số nguyên và số thực.

- `String`: Kiểu dữ liệu chuỗi, bao gồm các ký tự và chuỗi ký tự.

- `Boolean`: Kiểu dữ liệu luận lý, bao gồm giá trị true (đúng) hoặc false (sai).

- `Null`: Đại diện cho giá trị null, tức là không có giá trị hoặc giá trị không tồn tại.

- `Undefined`: Đại diện cho giá trị không được định nghĩa.

- `Symbol`: Kiểu dữ liệu đại diện cho một giá trị không trùng lặp, được sử dụng trong tạo ra các thuộc tính độc nhất của đối tượng.

Kiểu dữ liệu phức tạp:

- `Object`: Kiểu dữ liệu đại diện cho một đối tượng, bao gồm các thuộc tính và phương thức.

- `Array`: Kiểu dữ liệu đại diện cho một mảng, bao gồm nhiều giá trị có thể truy cập bằng chỉ số.

- `Function`: Kiểu dữ liệu đại diện cho một hàm, có thể được gọi và thực thi.

- `Date`: Kiểu dữ liệu đại diện cho ngày và thời gian.

- `RegExp`: Kiểu dữ liệu đại diện cho biểu thức chính quy (regular expression).

- `Map`: Kiểu dữ liệu đại diện cho một tập hợp các cặp khóa/giá trị.

- `Set`: Kiểu dữ liệu đại diện cho một tập hợp các giá trị duy nhất.

Chúng ta có thể kiểm tra kiểu dữ liệu của một biến bằng cách sử dụng toán tử `typeof`.
```
let num = 5;
console.log(typeof num); 
```
****
## Immutable và Mutable, Pass by value và Pass by reference 
Immutable và Mutable, Pass by value và Pass by reference là các khái niệm cơ bản về cách dữ liệu được lưu trữ và truyền đạt trong chương trình.

1. `Immutable và Mutable`:

- `Immutable` (không thay đổi): Đối tượng được coi là không thay đổi nếu giá trị của nó không thể thay đổi sau khi nó được tạo ra. Trong JavaScript, các kiểu dữ liệu nguyên thủy (primitive data types) như `Number`, `String` và `Boolean` được coi là không thay đổi.
- `Mutable` (thay đổi): Đối tượng được coi là có thể thay đổi nếu giá trị của nó có thể thay đổi sau khi nó được tạo ra. Trong JavaScript, các kiểu dữ liệu phức tạp như `Object` và `Array` được coi là có thể thay đổi.
2. `Pass by value và Pass by reference`:
- `Pass by value` (truyền theo giá trị): Khi truyền đối số vào một hàm, giá trị của đối số được sao chép vào một biến mới trong hàm, và thay đổi giá trị của biến này sẽ không ảnh hưởng đến giá trị của biến gốc bên ngoài hàm. Các kiểu dữ liệu nguyên thủy (`Number`, `String`, `Boolean`, `null`, `undefined`, `Symbol`) được truyền theo giá trị.
- 
`Pass by reference` (truyền theo tham chiếu): Khi truyền đối số vào một hàm, tham chiếu của đối số (ví dụ: địa chỉ bộ nhớ của biến) được sao chép vào một biến mới trong hàm, và thay đổi giá trị của biến này sẽ ảnh hưởng đến giá trị của biến gốc bên ngoài hàm. Các kiểu dữ liệu phức tạp như `Object` và `Array` được truyền theo tham chiếu.

Ví dụ:
```
// Immutable (không thay đổi)
let x = 5;
let y = x; // y được gán bằng giá trị của x (5)
y = 10; // thay đổi giá trị của y
console.log(x); // 5 (giá trị của x không bị thay đổi)
console.log(y); // 10 (giá trị của y được thay đổi)

// Mutable (có thể thay đổi)
let obj1 = { name: "John" };
let obj2 = obj1; // obj2 được gán bằng tham chiếu của obj1
obj2.name = "Jane"; // thay đổi giá trị của obj2
console.log(obj1); // { name: "Jane" } (giá trị của obj1 bị thay đổi)
console.log(obj2); // { name: "Jane" } (giá trị của obj2 được thay đổi)
```

Trong trường hợp đối tượng có thuộc tính là một kiểu dữ liệu nguyên thủy, ví dụ như một thuộc tính của đối tượng là một số, khi thay đổi giá trị của thuộc tính này thông qua một biến mới được tạo trong hàm, thì giá trị của thuộc tính đó sẽ không bị thay đổi ở bên ngoài hàm, tuy nhiên, nếu thay đổi giá trị của thuộc tính đó thông qua tham chiếu của đối tượng, thì giá trị của thuộc tính đó sẽ bị thay đổi ở bên ngoài hàm.

Ví dụ:
```
// Mutable (có thể thay đổi)
let obj = { number: 5 };
function changeNumber(x) {
  x.number = 10; // thay đổi giá trị của thuộc tính number của đối tượng
}
changeNumber(obj);
console.log(obj.number); // 10 (giá trị của thuộc tính number đã bị thay đổi)
```
****
## String Method
JavaScript có nhiều phương thức để xử lý chuỗi (string). Dưới đây là một số phương thức thông dụng:

`charAt()`: Trả về ký tự tại vị trí đã cho trong chuỗi.

`concat()`: Kết hợp hai hoặc nhiều chuỗi lại với nhau.

`indexOf()`: Trả về vị trí đầu tiên của một chuỗi con được tìm thấy trong chuỗi.

`lastIndexOf()`: Trả về vị trí cuối cùng của một chuỗi con được tìm thấy trong chuỗi.

`match()`: Tìm kiếm một chuỗi con trong chuỗi và trả về một mảng chứa tất cả các kết quả tìm được.

`replace()`: Thay thế một chuỗi con trong chuỗi bằng một chuỗi khác.

`slice()`: Trích xuất một phần của chuỗi và trả về nó dưới dạng một chuỗi mới.

`split()`: Chuyển đổi chuỗi thành một mảng bằng cách tách chuỗi theo một chuỗi con đã cho.

`substring()`: Trích xuất một phần của chuỗi và trả về nó dưới dạng một chuỗi mới.

`toLowerCase()`: Chuyển đổi các ký tự trong chuỗi thành ký tự viết thường.

`toUpperCase()`: Chuyển đổi các ký tự trong chuỗi thành ký tự viết hoa.

`trim()`: Loại bỏ khoảng trắng ở đầu và cuối chuỗi.

`startsWith()`: Kiểm tra xem chuỗi có bắt đầu bằng một chuỗi con đã cho hay không.

`endsWith()`: Kiểm tra xem chuỗi có kết thúc bằng một chuỗi con đã cho hay không.
****
## This là gì?
Trong JavaScript, `this` là một từ khóa đại diện cho đối tượng hiện tại được sử dụng để truy cập và thao tác với các thuộc tính và phương thức của đối tượng đó. Giá trị của this phụ thuộc vào cách mà phương thức được gọi và nơi nó được gọi. Nếu phương thức được gọi từ một đối tượng, this sẽ trỏ đến đối tượng đó. Nếu phương thức được gọi từ một hàm thông thường, this sẽ trỏ đến đối tượng toàn cục window trong trình duyệt hoặc global trong Node.js.

Vì giá trị của `this` phụ thuộc vào cách mà phương thức được gọi, nó có thể gây nhầm lẫn và khó hiểu trong một số trường hợp. Để tránh sự nhầm lẫn, người lập trình có thể sử dụng các phương thức như `bind()`, `call()` hoặc `apply()` để xác định rõ ràng giá trị của `this` cho một phương thức.

Các hàm đó có chức năng như sau:

`call`: phương thức call được sử dụng để gọi một phương thức với một giá trị nhất định cho this và các đối số được truyền vào dưới dạng danh sách.

 Ví dụ: 
 
 `myFunction.call(thisArg, arg1, arg2, ...).`
 ```
 const person1 = {
  name: 'Alice',
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

const person2 = {
  name: 'Bob'
};

person1.greet.call(person2); // logs "Hello, my name is Bob"
```

`apply`: phương thức apply cũng được sử dụng để gọi một phương thức với một giá trị nhất định cho this, nhưng các đối số được truyền vào dưới dạng một mảng. 

Ví dụ: 

`myFunction.apply(thisArg, [arg1, arg2, ...]).`

`bind`: phương thức bind được sử dụng để tạo ra một hàm mới với giá trị cho this được đặt sẵn, và các đối số khác có thể được truyền vào khi hàm mới được gọi. Phương thức này trả về một hàm mới, không thực thi hàm ngay lập tức.

 Ví dụ: 
 
 `var newFunction = myFunction.bind(thisArg, arg1, arg2, ...).`
 ```
 const person = {
  name: 'Alice',
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

const greetAlice = person.greet.bind(person); // creates a new function with "this" set to "person"
greetAlice(); // logs "Hello, my name is Alice"
```
****
## so sánh setInterval và setTimeout
Cả hai hàm `setInterval` và `setTimeout` đều được sử dụng trong JavaScript để lập lịch thực hiện một tác vụ sau một khoảng thời gian nhất định.

Tuy nhiên, có một số sự khác biệt quan trọng giữa hai hàm này:

- `setTimeout` được sử dụng để thực hiện một tác vụ sau một khoảng thời gian nhất định, trong khi setInterval được sử dụng để thực hiện một tác vụ lặp đi lặp lại với một khoảng thời gian cố định giữa mỗi lần thực hiện.

- Khi sử dụng `setTimeout`, tác vụ chỉ được thực hiện một lần sau khi thời gian đã trôi qua. Trong khi đó, khi sử dụng setInterval, tác vụ sẽ được thực hiện lặp đi lặp lại sau một khoảng thời gian nhất định cho đến khi bạn ngừng hoặc hủy nó.

- Cả hai hàm đều trả về một ID cho việc xóa hoặc hủy lịch trình, tuy nhiên, ID được trả về bởi `setInterval` là duy nhất và có thể được sử dụng để ngừng hoặc hủy lịch trình được tạo ra bởi chính nó, trong khi ID được trả về bởi `setTimeout` có thể không duy nhất và có thể được sử dụng để hủy lịch trình được tạo ra bởi các hàm khác.

Vì vậy, khi muốn thực hiện một tác vụ sau một khoảng thời gian nhất định, bạn nên sử dụng `setTimeout`. Khi muốn lặp đi lặp lại một tác vụ với một khoảng thời gian cố định giữa mỗi lần thực hiện, bạn nên sử dụng `setInterval`.
****
## Có những cách nào để lưu trữ lại dữ liệu trên máy của user? Giải thích cụ thể
- `Cookies`: Cookies là một loại lưu trữ dữ liệu nhỏ trên máy tính của người dùng. Chúng được sử dụng để lưu trữ thông tin như tên đăng nhập, thông tin giỏ hàng, v.v. Cookies được tạo ra và quản lý bởi trình duyệt và được gửi lại cho máy chủ mỗi khi trình duyệt yêu cầu tài nguyên từ máy chủ.
    - Ưu điểm: Cookies là một phương pháp lưu trữ đơn giản và dễ sử dụng, được hỗ trợ bởi hầu hết các trình duyệt. Cookies có thể được sử dụng để lưu trữ thông tin phiên làm việc như giỏ hàng và tên đăng nhập.
    - Hạn chế: Cookies có giới hạn kích thước lưu trữ chỉ khoảng 4KB. Ngoài ra, cookies có thể bị xóa bởi người dùng, làm mất dữ liệu. Cookies cũng có thể được đọc bởi các trang web khác trong cùng một miền.

- `Local Storage` và `Session Storage`: Local storage và session storage là các API của HTML5 cho phép lưu trữ dữ liệu trên máy tính của người dùng. Session storage lưu trữ dữ liệu trong phiên làm việc của trình duyệt, trong khi local storage lưu trữ dữ liệu vĩnh viễn trên máy tính của người dùng. Dữ liệu được lưu trữ dưới dạng cặp key-value và có thể được truy cập và cập nhật thông qua JavaScript.
    - Ưu điểm: Local storage và session storage được hỗ trợ bởi hầu hết các trình duyệt hiện đại. Chúng cung cấp lưu trữ dữ liệu đơn giản và mạnh mẽ hơn so với cookies, với kích thước lưu trữ lên đến vài MB. Local storage lưu trữ dữ liệu vĩnh viễn, trong khi session storage lưu trữ dữ liệu trong phiên làm việc hiện tại của trình duyệt.
    - Hạn chế: Local storage và session storage không hỗ trợ các tính năng truy vấn phức tạp như cơ sở dữ liệu quan hệ. Chúng cũng không cung cấp tính năng đồng bộ hóa dữ liệu, do đó các lần cập nhật cùng một dữ liệu trên nhiều trình duyệt khác nhau có thể gây ra xung đột.

- `IndexedDB`: IndexedDB là một cơ sở dữ liệu nội bộ của trình duyệt, cho phép lưu trữ dữ liệu lớn hơn và có tính cơ động hơn so với local storage và session storage. IndexedDB sử dụng cấu trúc cơ sở dữ liệu NoSQL, cho phép truy vấn dữ liệu và tạo các chỉ mục.
    - Ưu điểm: IndexedDB là một cơ sở dữ liệu nội bộ của trình duyệt, cho phép lưu trữ dữ liệu lớn hơn và có tính cơ động hơn so với local storage và session storage. IndexedDB sử dụng cấu trúc cơ sở dữ liệu NoSQL, cho phép truy vấn dữ liệu và tạo các chỉ mục.
    - Hạn chế: IndexedDB là một API mới, không được hỗ trợ bởi tất cả các trình duyệt. Đồng thời, IndexedDB cũng có độ phức tạp cao hơn so với các phương pháp lưu trữ khác

- `Web SQL`: Web SQL là một cơ sở dữ liệu quan hệ được hỗ trợ bởi các trình duyệt dựa trên SQLite. Web SQL cho phép lưu trữ dữ liệu theo cấu trúc bảng và có thể được truy vấn bằng SQL.
    - Ưu điểm: Web SQL là một cơ sở dữ liệu quan hệ được hỗ trợ bởi các trình duyệt dựa trên SQLite. Web SQL cho phép lưu trữ dữ liệu theo cấu trúc bảng và có thể được truy vấn bằng SQL.
    - Hạn chế: Web SQL đã bị loại bỏ khỏi tiêu chuẩn HTML5
****
## BOM và DOM là gì?
1. `BOM (Browser Object Model)` BOM là một mô hình đối tượng cho các trình duyệt web. Nó cho phép JavaScript truy cập và thao tác với các thành phần của trình duyệt như cửa sổ, khung (frame), vị trí (location), lịch sử (history),… BOM không phải là một chuẩn chính thức và có thể khác nhau giữa các trình duyệt.

2. `DOM (Document Object Model)` là một biểu diễn của cấu trúc trang web dưới dạng cây đối tượng. DOM bao gồm tất cả các phần tử trên trang web như các thẻ HTML, các thuộc tính và nội dung của chúng. DOM cung cấp các phương thức để truy cập và thay đổi nội dung của các phần tử trên trang web.

Mọi thành phần đều được xem là 1 nút (node), được biểu diễn trên 1 cây cấu trúc dạng cây gọi là DOM Tree. Các phần tử khác nhau sẽ được phân loại nút khác nhau nhưng quan trọng nhất là 3 loại: nút gốc (document node), nút phần tử (element node), nút văn bản (text node).

- Nút gốc: chính là tài liệu HTML, thường được biểu diễn bởi thẻ `<html>`.
- Nút phần tử: biểu diễn cho 1 phần tử HTML.
- Nút văn bản: mỗi đoạn kí tự trong tài liệu HTML, bên trong 1 thẻ HTML đều là 1 nút văn bản. Đó có thể là tên trang web trong thẻ `<title>`, tên đề mục trong thẻ `<h1>`, hay một đoạn văn trong thẻ

Điểm khác biệt giữa BOM và DOM là BOM tương tác với các thành phần của trình duyệt, trong khi DOM tương tác với cấu trúc của trang web. Cả BOM và DOM đều làm việc với JavaScript để tạo ra các tương tác động trên trang web.
****
## Inheritance
Inheritance trong JavaScript là cơ chế cho phép đối tượng kế thừa các tính năng từ đối tượng cha của nó. Trong ES5, cơ chế kế thừa được thực hiện bằng cách sử dụng các phương thức của hàm khởi tạo (constructor function) và prototype của đối tượng.

Trong ES6, cơ chế kế thừa đã được cải tiến với sự xuất hiện của lớp (class) trong JavaScript. Với cú pháp class, chúng ta có thể tạo ra các đối tượng mới bằng cách sử dụng từ khóa new và các phương thức khởi tạo (constructor) của lớp. Lớp cũng cho phép sử dụng từ khóa extends để kế thừa các tính năng từ một lớp cha (superclass).

Một số sự khác biệt chính giữa Inheritance trong ES5 và ES6:

1. Cú pháp khai báo đối tượng:
    - Trong ES5, chúng ta sử dụng hàm khởi tạo (constructor function) để khai báo đối tượng.
    - Trong ES6, chúng ta sử dụng từ khóa class để khai báo lớp (class), và từ khóa constructor để khai báo phương thức khởi tạo của lớp.
2. Cú pháp kế thừa:
    - Trong ES5, chúng ta sử dụng prototype để kế thừa các tính năng từ đối tượng cha.
    - Trong ES6, chúng ta sử dụng từ khóa extends để kế thừa các tính năng từ một lớp cha.
3. Sử dụng super:
    - Trong ES5, để gọi phương thức của đối tượng cha, chúng ta phải sử dụng các phương thức của prototype.
    - Trong ES6, chúng ta có thể sử dụng từ khóa super để gọi phương thức của lớp cha.
4. Tính đa hình (polymorphism):
    - Trong ES5, tính đa hình được thực hiện thông qua việc ghi đè các phương thức của đối tượng cha.
    - Trong ES6, chúng ta có thể sử dụng các phương thức static và phương thức ghi đè (override method) để thực hiện tính đa hình.

Với sự xuất hiện của lớp và cú pháp kế thừa mới trong ES6, việc sử dụng Inheritance trong JavaScript trở nên đơn giản và dễ dàng hơn.
***
## == và  ===
1. Toán tử "==":
So sánh giá trị của hai biến.
Nếu hai biến có cùng giá trị, kết quả trả về là true.
Nếu hai biến có kiểu dữ liệu khác nhau, JavaScript sẽ cố gắng chuyển đổi kiểu dữ liệu để so sánh chúng.

Ví dụ:
```
console.log(5 == "5"); // true (so sánh giá trị)
console.log(5 == 5); // true (cùng kiểu dữ liệu)
console.log(5 == true); // true (chuyển đổi giá trị của true thành 1)
console.log(5 == false); // false (chuyển đổi giá trị của false thành 0)
```
2. Toán tử "===":
So sánh giá trị và kiểu dữ liệu của hai biến.
Nếu hai biến có cùng giá trị và kiểu dữ liệu, kết quả trả về là true.
Nếu hai biến có kiểu dữ liệu khác nhau, kết quả trả về là false.

Ví dụ
```
console.log(5 === "5"); // false (kiểu dữ liệu khác nhau)
console.log(5 === 5); // true (cùng giá trị và kiểu dữ liệu)
console.log(5 === true); // false (kiểu dữ liệu khác nhau)
console.log(5 === false); // false (kiểu dữ liệu khác nhau)
```
****
## `var` và `let`
Trong JavaScript, `var` và `let` là các từ khóa để khai báo biến.

- `var` đã tồn tại trong JavaScript từ rất lâu và được sử dụng để khai báo biến toàn cục hoặc cục bộ. Khi bạn khai báo biến với `var` trong một hàm, biến đó sẽ được khai báo với phạm vi cục bộ trong hàm đó, có nghĩa là nó chỉ có thể được truy cập trong phạm vi của hàm đó. Tuy nhiên, nếu bạn khai báo biến với `var` bên ngoài bất kỳ hàm nào, biến đó sẽ trở thành biến toàn cục và có thể được truy cập từ bất kỳ đâu trong phạm vi chương trình.

- `let` là một tính năng mới được giới thiệu trong phiên bản tiêu chuẩn của JavaScript (ES6). Khi bạn khai báo biến với `let`, biến đó sẽ chỉ tồn tại trong phạm vi khối (block scope) mà nó được khai báo, ví dụ như trong một hàm, một lệnh if, hoặc một vòng lặp for. Tương tự như `var`, khi bạn khai báo biến với `let` bên ngoài bất kỳ khối nào, biến đó sẽ trở thành biến toàn cục.

Một điểm khác biệt quan trọng khác giữa `let` và `var` là `let` sẽ ném ra một lỗi khi bạn cố gắng truy cập biến trước khi nó được khai báo, trong khi `var` sẽ cho phép bạn truy cập vào giá trị của biến trước khi nó được khai báo, giá trị đó sẽ là undefined.

## phân biệt var , let , const

Trong JavaScript, có 3 từ khóa được sử dụng để khai báo biến: `let`, `const`, và `var`.

1. `var`: là từ khóa cũ được sử dụng để khai báo một biến trong JavaScript. khai báo có 2 dạng toàn cục - global (ảnh hưởng mọi nơi) và địa phương - local (chỉ ảnh hưởng bên trong function). Một biến được khai báo bằng `var` cũng có thể được khai báo lại trong cùng phạm vi hoạt động.


2. `let`: sử dụng như `var`, tuy nhiên có tác dụng phạm vi bên trong một khối (như bên trong câu điều kiện if, vòng lặp for, ...).. Biến được khai báo bằng `let` chỉ được truy cập trong khối mã nơi nó được khai báo. Khai báo biến `let` có thể được cập nhật nhưng không thể khai báo lại.

3. `const`: cũng là từ khóa để khai báo một biến, tuy nhiên, biến được khai báo bằng `const` không thể được gán lại giá trị sau khi đã được khởi tạo. Nó cũng có phạm vi hoạt động trong khối mã mà nó được khai báo.


* Sự khác biệt giữa `let` và `var`:

Biến được khai báo bằng `let` có phạm vi hoạt động (scope) trong khối mã mà nó được khai báo, trong khi biến được khai báo bằng `var` có phạm vi hoạt động trong hàm.
Biến được khai báo bằng `let` không thể khai báo lại, trong khi biến được khai báo bằng `var` có thể khai báo lại trong cùng phạm vi hoạt động.
* Sự khác biệt giữa `let` và `const`:

Biến được khai báo bằng `const` không thể gán lại giá trị sau khi đã được khởi tạo, trong khi biến được khai báo bằng `let` có thể được gán lại giá trị.
Cả hai đều có phạm vi hoạt động trong khối mã mà nó được khai báo.

## Async và Await
- I. Khái niệm

Async và Await là hai tính năng của JavaScript được giới thiệu từ phiên bản ES2017 (hay còn gọi là ES8), giúp xử lý các thao tác bất đồng bộ (asynchronous) trong code trở nên dễ dàng hơn.

Trước khi có Async và Await, để xử lý các tác vụ bất đồng bộ, ta thường sử dụng Promise và callback. Tuy nhiên, viết code sử dụng Promise hoặc callback có thể khiến code trở nên khó đọc và khó bảo trì, đặc biệt khi ta phải xử lý nhiều tác vụ bất đồng bộ liên quan đến nhau.

Với Async và Await, ta có thể viết các thao tác bất đồng bộ giống như các thao tác đồng bộ (synchronous), giúp cho code trở nên dễ đọc hơn, dễ bảo trì hơn và tránh được callback hell (hiện tượng khi ta phải lồng nhiều callback vào nhau để xử lý các tác vụ bất đồng bộ).

Async và Await cùng nhau hoạt động để giải quyết các vấn đề liên quan đến các thao tác bất đồng bộ trong JavaScript. Async là một từ khóa đặt trước một hàm để chỉ định rằng hàm đó là một hàm bất đồng bộ, còn Await là một từ khóa được sử dụng trong một hàm bất đồng bộ để tạm dừng việc thực thi hàm đó cho đến khi một Promise được giải quyết.

- có một số điểm khác nhau giữa chúng:

1. Cú pháp: Async/await được sử dụng với từ khóa async và await trong khi Promise sử dụng các phương thức then() và catch().

2. Quản lý lỗi: Trong Async/await, lỗi được quản lý bằng try-catch block. Trong khi đó, với Promise, lỗi được quản lý thông qua hàm catch().

3. Tính đồng bộ: Async/await giúp làm cho mã trông giống với mã đồng bộ, dễ đọc và hiểu hơn. Trong khi đó, Promise cho phép xử lý nhiều tác vụ bất đồng bộ cùng một lúc, làm cho nó phù hợp hơn với các tác vụ phức tạp.

4. Sử dụng trong các hàm callback: Async/await có thể được sử dụng trong các hàm callback, trong khi Promise không thể.

5. Tính khả dụng: Async/await có sẵn trong các phiên bản mới của JavaScript (ES2017) trong khi Promise có sẵn từ ES6.

Tóm lại, Async/await và Promise đều là các công cụ hữu ích để xử lý bất đồng bộ trong JavaScript, và chúng có những ưu điểm riêng. Cách sử dụng phụ thuộc vào nhu cầu của dự án cụ thể.
- có thể sử dụng Async/Await trong những trường hợp sau:

1. Khi bạn cần thực hiện các yêu cầu HTTP bất đồng bộ từ máy chủ của mình hoặc các API khác.
2. Khi bạn cần đọc hoặc ghi các tệp trên đĩa của bạn bất đồng bộ.
3. Khi bạn cần truy vấn cơ sở dữ liệu của mình bất đồng bộ.
4. Khi bạn cần thực hiện các tác vụ phức tạp, bao gồm sử dụng nhiều lệnh bất đồng bộ hoặc truy cập vào nhiều API khác nhau.
5. Khi bạn cần đảm bảo rằng mã của bạn được thực thi theo đúng thứ tự và kết thúc trước khi chuyển sang phần tiếp theo.

Async/Await được sử dụng để giải quyết vấn đề về callback hell, khi nhiều lệnh bất đồng bộ phải được sử dụng trong một chương trình. Sử dụng Async/Await giúp mã của bạn dễ đọc hơn và giúp bạn quản lý các yêu cầu bất đồng bộ một cách hiệu quả hơn.
****
# ES6
*** 
## Khái niệm
ES6 là tên viết tắt của phiên bản thứ 6 của ECMAScript, một tiêu chuẩn quốc tế cho các ngôn ngữ lập trình kịch bản. ECMAScript là cơ sở của các ngôn ngữ lập trình như JavaScript, ActionScript và JScript.

ES6 cung cấp các tính năng mới và cải tiến cho JavaScript, làm cho việc lập trình trở nên dễ dàng hơn và tăng tính năng của ngôn ngữ. Dưới đây là danh sách các tính năng chính của ES6:

1. Từ khóa let và const:

Từ khóa let và const được sử dụng để khai báo biến trong JavaScript.
Khác với từ khóa var, biến được khai báo bằng let và const có phạm vi chỉ nằm trong khối lệnh mà nó được khai báo.
Từ khóa const được sử dụng để khai báo biến không thay đổi giá trị trong quá trình chạy.
Ví dụ:
```
let x = 1;
const y = 2;
```
2. Arrow function:

Arrow function là cú pháp viết tắt của hàm trong JavaScript.
Arrow function có thể sử dụng để viết ngắn gọn và đơn giản hóa cú pháp của hàm.
Arrow function sử dụng dấu mũi tên (=>) để định nghĩa hàm.
Ví dụ:
```
let sum = (a, b) => {
  return a + b;
}
```
3. Template literals:

Template literals là cú pháp mới để tạo chuỗi trong JavaScript.
Template literals sử dụng dấu `` để bao quanh chuỗi và có thể chứa biểu thức JavaScript được tính toán trước khi trả về chuỗi.
Ví dụ:
```
let name = "Alice";
console.log(`Hello ${name}!`);
```
4. Default function parameters:

Default function parameters là cú pháp mới cho phép đặt giá trị mặc định cho tham số của hàm.
Khi không truyền giá trị cho tham số, giá trị mặc định sẽ được sử dụng.
Ví dụ:
```
function greet(name = "World") {
  console.log(`Hello ${name}!`);
}
greet(); // "Hello World!"
greet("Alice"); // "Hello Alice!"
```
5. Rest and spread operators:

Rest và spread operators là cú pháp mới cho phép thao tác với mảng và đối tượng.
Rest operator được sử dụng để tạo mảng từ nhiều tham số của hàm.
Spread operator được sử dụng để tạo mảng mới bằng cách trộn các phần tử của các mảng khác nhau.
Ví dụ:
```
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let newArr = [...arr1, ...arr2];
console.log(newArr); // [1, 2, 3, 4, 5, 6]
```
6. Destructuring assignment:

Destructuring assignment là cú pháp mới cho phép truy cập vào các phần tử của mảng hoặc đối tượng một cách dễ dàng.

Destructuring assignment sử dụng cú pháp giống với khai báo biến để truy cập vào các phần tử của mảng hoặc đối tượng.
Ví dụ:
```
let arr = [1, 2, 3];
let [a, b, c] = arr;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

let obj = {name: "Alice", age: 30};
let {name, age} = obj;
console.log(name); // "Alice"
console.log(age); // 30
```
7. Classes:

Classes là một cú pháp mới cho phép định nghĩa lớp trong JavaScript.
Classes sử dụng từ khóa class để định nghĩa lớp và constructor để khởi tạo đối tượng.
Các phương thức của lớp được định nghĩa bằng cú pháp giống như định nghĩa hàm.
Ví dụ:
```
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

let person = new Person("Alice", 30);
person.greet(); // "Hello, my name is Alice and I am 30 years old."
```
8. Enhanced object literals:

Enhanced object literals là cú pháp mới cho phép định nghĩa đối tượng trong JavaScript.
Enhanced object literals sử dụng cú pháp ngắn gọn hơn cho phép định nghĩa thuộc tính và phương thức của đối tượng.
Ví dụ:
```
let name = "Alice";
let age = 30;
let person = {
  name,
  age,
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
};
person.greet(); // "Hello, my name is Alice and I am 30 years old."
```
9. Promises:

Promises là cú pháp mới cho phép xử lý bất đồng bộ trong JavaScript.
Promises sử dụng cú pháp đơn giản hơn cho phép xử lý lỗi và giá trị trả về của một hàm bất đồng bộ.
Ví dụ:
```
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000);
  });
}

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```
10. Generators:

Generators là cú pháp mới cho phép tạo ra một loại hàm đặc biệt trong JavaScript.
Generators sử dụng từ khóa function* để định nghĩa và có thể dừng lại và tiếp tục từ điểm dừng đó.

Generators sử dụng từ khóa yield để tạo ra các giá trị trả về cho đối tượng Generator.
Ví dụ:
```
function* generatorFunction() {
  yield 1;
  yield 2;
  yield 3;
}

let generator = generatorFunction();
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3
```
11. Template literals:

Template literals là cú pháp mới cho phép tạo ra chuỗi trong JavaScript.
Template literals sử dụng cú pháp giống với các chuỗi thông thường nhưng cho phép sử dụng các biểu thức và biến trong chuỗi.
Ví dụ:
```
let name = "Alice";
let message = `Hello, my name is ${name}.`;
console.log(message); // "Hello, my name is Alice."
```
12. Arrow functions:

Arrow functions là cú pháp mới cho phép định nghĩa hàm trong JavaScript.
Arrow functions sử dụng cú pháp ngắn gọn hơn cho phép truy cập vào biến this của hàm bên ngoài.
Ví dụ:
```
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // [2, 4]
```
13. Default parameters:

Default parameters là cú pháp mới cho phép định nghĩa giá trị mặc định cho tham số của hàm trong JavaScript.
Ví dụ:
```
function greet(name = "World") {
  console.log(`Hello, ${name}!`);
}

greet(); // "Hello, World!"
greet("Alice"); // "Hello, Alice!"
```
14. Rest parameters:

Rest parameters là cú pháp mới cho phép định nghĩa một tham số cuối cùng trong danh sách tham số của hàm để nhận tất cả các tham số còn lại dưới dạng một mảng.
Ví dụ:
```
function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(4, 5, 6, 7)); // 22
```

***
## Write Arrow Functions with Parameters

- Giống như một hàm thông thường, bạn có thể truyền tham số vào trong một hàm mũi tên (arrow function).

Ví dụ:
```
const doubler = (item) => item * 2;
doubler(4);
```
Trong đó, doubler(4) sẽ trả về giá trị là 8.

- Nếu một hàm mũi tên chỉ có một tham số, bạn có thể bỏ qua dấu ngoặc đơn () bao quanh tham số.

Ví dụ:
```
const doubler = item => item * 2;
```
- Ngoài ra, bạn cũng có thể truyền nhiều hơn một tham số vào một hàm mũi tên.

Ví dụ:
```
const multiplier = (item, multi) => item * multi;
multiplier(4, 2);
```
****
## toán tử spread
ES6 giới thiệu toán tử spread, cho phép chúng ta mở rộng các mảng và biểu thức khác ở những nơi mà nhiều tham số hoặc phần tử được mong đợi.

Đoạn mã ES5 dưới đây sử dụng `apply()` để tính giá trị lớn nhất trong một mảng:
```
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);
```
maximus sẽ có giá trị là 89.

Chúng ta phải sử dụng `Math.max.apply(null, arr) `bởi vì `Math.max(arr)` trả về `NaN`. `Math.max()` mong đợi các đối số được phân tách bằng dấu phẩy, nhưng không phải là một mảng. Toán tử spread làm cho cú pháp này dễ đọc và bảo trì hơn.
```
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
```
maximus sẽ có giá trị là 89.

`...arr` trả về một mảng được mở rộng. Nói cách khác, nó trải mảng. Tuy nhiên, toán tử spread chỉ hoạt động tại chỗ, như trong đối số của một hàm hoặc trong một mảng chữ ký. Đoạn mã sau sẽ không hoạt động:

`const spreaded = ...arr;`
****
## Destructuring assignment(phân giao)
1. Destructuring là một cú pháp đặc biệt được giới thiệu trong ES6, cho phép gán giá trị trực tiếp từ một đối tượng một cách gọn gàng.

Hãy xem xét đoạn mã ES5 sau:
```
const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;
```
Biến `name` sẽ có giá trị là chuỗi "John Doe" và biến `age` sẽ có giá trị là số 34.

Dưới đây là một câu lệnh gán tương đương sử dụng cú pháp phân giao ES6:
```
const { name, age } = user;
```
Một lần nữa, biến `name` sẽ có giá trị là chuỗi "John Doe" và biến `age` sẽ có giá trị là số 34.

Ở đây, các biến `name` và `age` sẽ được tạo ra và gán giá trị tương ứng của chúng từ đối tượng user. Bạn có thể trích xuất bao nhiêu giá trị từ đối tượng tùy thích.

2. Destructuring cho phép bạn gán tên biến mới khi trích xuất giá trị. Bạn có thể làm điều này bằng cách đặt tên mới sau dấu `:` khi gán giá trị.

- Sử dụng cùng đối tượng từ ví dụ trước:

`const user = { name: 'John Doe', age: 34 };`

- Dưới đây là cách bạn có thể đặt tên biến mới trong phép gán:

`const { name: userName, age: userAge } = user;`

Bạn có thể đọc nó như "lấy giá trị của user.name và gán cho một biến mới có tên là `userName`" và tương tự. Giá trị của `userName` sẽ là chuỗi John Doe và giá trị của userAge sẽ là số 34.

3. Bạn có thể sử dụng các nguyên tắc giống như hai bài học trước để lấy các giá trị từ các đối tượng lồng nhau.

Sử dụng một đối tượng tương tự như các ví dụ trước:
```
const user = {
johnDoe: {
age: 34,
email: 'johnDoe@freeCodeCamp.com'
}
};
```
Dưới đây là cách trích xuất các giá trị của các thuộc tính của đối tượng và gán chúng vào các biến cùng tên:

`const { johnDoe: { age, email }} = user;`

Và đây là cách bạn có thể gán giá trị của các thuộc tính đối tượng vào các biến với tên khác nhau:
```
const { johnDoe: { age: userAge, email: userEmail }} = user;
```
4.`destructuring array` trở nên dễ dàng tương tự như `destructuring objects.`

Một khác biệt quan trọng giữa `spread operator` và `destructuring array` là `spread operator` giải nén tất cả các phần tử của một mảng thành một danh sách phân cách bằng dấu phẩy. Do đó, bạn không thể lựa chọn các phần tử mà bạn muốn gán cho các biến.

`Destructuring array` cho phép chúng ta làm chính xác điều đó:
```
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);
```
Console sẽ hiển thị giá trị của a và b là 1, 2.

Biến a được gán giá trị đầu tiên của mảng, và b được gán giá trị thứ hai của mảng. Chúng ta cũng có thể truy cập vào giá trị tại bất kỳ chỉ mục nào trong một mảng với destructuring bằng cách sử dụng dấu phẩy để đến chỉ mục mong muốn:
```
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);
```
Console sẽ hiển thị giá trị của a, b và c là 1, 2, 5.
## Use Destructuring Assignment to Pass an Object as a Function's Parameters
Trong một số trường hợp, bạn có thể sử dụng destructuring object trực tiếp trong đối số của một hàm.
```
const profileUpdate = (profileData) => {
const { name, age, nationality, location } = profileData;

}
```
Đoạn code này tương đương với việc destructuring đối tượng được truyền vào hàm. Điều này cũng có thể được thực hiện ngay tại chỗ:
```
const profileUpdate = ({ name, age, nationality, location }) => {

}
```
Khi profileData được truyền vào hàm trên, các giá trị được destructured từ tham số hàm để sử dụng trong hàm.
***
## Template literal
Template literal là một tính năng mới của ES6. Đây là một loại chuỗi đặc biệt giúp tạo chuỗi phức tạp dễ dàng hơn.

Template literal cho phép bạn tạo chuỗi đa dòng và sử dụng tính năng string interpolation để tạo chuỗi.
```
const person = {
name: "Zodiac Hasbro",
age: 56
};

const greeting = Hello, my name is ${person.name}! I am ${person.age} years old.;

console.log(greeting);
```
Trong đó, đoạn mã sử dụng dấu backticks (`) thay vì dấu ngoặc đơn (' hoặc ") để bao quanh chuỗi. Thứ hai, lưu ý rằng chuỗi là đa dòng, cả trong mã và đầu ra. Điều này giúp bạn không phải sử dụng \n trong chuỗi. 

Cú pháp `${biến}` được sử dụng là một trình giữ chỗ. Theo cách này, bạn không cần phải sử dụng phép ghép chuỗi với phép toán + nữa. Để thêm biến vào chuỗi, bạn chỉ cần bỏ biến đó vào một chuỗi mẫu và bao quanh nó bằng `${ và }`. Tương tự, bạn có thể bao gồm các biểu thức khác trong chuỗi mẫu của mình, ví dụ như `${a + b}`. Cách tạo chuỗi mới này mang lại cho bạn nhiều tính linh hoạt hơn để tạo ra các chuỗi mạnh mẽ.
****
# OOP

