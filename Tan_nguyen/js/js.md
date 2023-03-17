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

Điểm khác biệt giữa BOM và DOM là BOM tương tác với các thành phần của trình duyệt, trong khi DOM tương tác với cấu trúc của trang web. Cả BOM và DOM đều làm việc với JavaScript để tạo ra các tương tác động trên trang web.