# summary

---

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

---

## Hoisting

Hoisting là một tính năng trong JavaScript nó sẽ chuyển phần khai báo lên phía trên top Trong Javascript, một biến (variable) có thể được khai báo sau khi được sử dụng. Cụ thể, các khai báo biến và hàm được đưa lên đầu của phạm vi chứ không phải được thực hiện trong thứ tự ghi vào mã nguồn.

- Trình biên dịch của Javascript sẽ chuyển phần khai báo của biến và hàm lên trên top, nó được gọi là Hoisting
- Chỉ có phần khai báo được đưa lên top, không phải phần gán giá trị
- Phần khai báo hàm được đưa lên trước phần khai báo của biến

---

## Scope và Closure là gì?

- `Scope` xác định những biến nào có thể truy cập được trong một phạm vi nhất định trong chương trình. Trong JavaScript, có ba loại phạm vi: global scope (phạm vi toàn cục), function scope (phạm vi hàm) và block scope (phạm vi khối). Biến được khai báo trong phạm vi toàn cục có thể truy cập được từ bất kỳ đâu trong chương trình, trong khi các biến được khai báo trong phạm vi hàm và phạm vi khối chỉ có thể truy cập được trong hàm hoặc khối mà chúng được khai báo.

- Global scope là phạm vi mà các biến được khai báo trong đó có thể được truy cập từ bất kỳ đâu trong chương trình. Phạm vi hàm (function scope) là phạm vi mà các biến được khai báo trong đó chỉ có thể được truy cập từ bên trong hàm đó. Phạm vi khối (block scope) là phạm vi mà các biến được khai báo trong đó chỉ có thể được truy cập từ bên trong khối đó.

- `Closure` là một tính năng trong JavaScript cho phép hàm lưu trữ các biến và tham chiếu đến chúng trong khi vẫn giữ được phạm vi ban đầu của chúng. Khi một hàm được tạo ra bên trong một hàm khác, hàm con được tạo ra có thể truy cập các biến và tham chiếu đến chúng trong phạm vi của hàm cha, mặc dù hàm cha đã kết thúc. Điều này cho phép các hàm được tạo ra trong thời gian chạy để truy cập các biến và giá trị trong phạm vi của hàm cha, làm cho Closure rất hữu ích trong việc lập trình.

Ví dụ, trong JavaScript, các closure có thể được sử dụng để tạo ra các hàm đóng gói dữ liệu và chức năng lại với nhau. Các biến trong scope của hàm được giữ lại và sử dụng lại mỗi lần hàm được gọi, cho phép ta tạo ra các hàm đa dụng và linh hoạt.

---

## object trong js

Trong JavaScript, "object" là một kiểu dữ liệu phổ biến được sử dụng để lưu trữ và truy xuất các dữ liệu có tính động. Object là một tập hợp các cặp key-value, trong đó key là một chuỗi (string) đại diện cho tên của thuộc tính và value có thể là một giá trị bất kỳ, bao gồm các kiểu dữ liệu cơ bản như số, chuỗi, boolean, null hoặc undefined, hoặc có thể là một object khác.

Cú pháp khởi tạo một object:

```
let obj = {}; // khởi tạo một object rỗng
let obj2 = {key1: "value1", key2: "value2"}; // khởi tạo một object với các cặp key-value
```

Các thuộc tính của một object có thể được truy xuất bằng cách sử dụng dấu chấm (.) hoặc dấu ngoặc vuông ([]). Ví dụ:

```
console.log(obj2.key1); // "value1"
console.log(obj2["key2"]); // "value2"
```

Trong JavaScript, object còn có thể được tạo ra bằng cách sử dụng constructor function hoặc class. Việc sử dụng constructor function và class giúp ta tạo ra nhiều object có cấu trúc tương tự nhau một cách dễ dàng.

---

Trong JavaScript, có rất nhiều function để tương tác với Object. Sau đây là một số function phổ biến:
`Object.create()` : Tạo object mới sử dụng một object hiện có để cung cấp `__proto__` của object mới được tạo ra.

Cú pháp

`Object.create(prototypeObject, propertiesObject)`

`prototypeObject`: Object prototype mới được tạo. Nó có thể là object hoặc null.
`propertiesObject`: Các thuộc tính của object mới (tùy chọn).

`Object.prototype` là một thuộc tính của mỗi đối tượng trong JavaScript, nó là một Object và chứa các thuộc tính và phương thức mặc định mà mỗi Object được kế thừa từ nó. Vì vậy, nếu bạn tạo một đối tượng mới bằng từ khóa new, nó sẽ kế thừa các thuộc tính và phương thức của Object.prototype.

```
const obj = new Object(); // Tạo một Object mới
console.log(obj.toString()); // "[object Object]"
```

Ở đây, phương thức `toString()` là một phương thức của `Object.prototype`, nhưng vì obj được kế thừa từ `Object.prototype`, nó cũng có thể sử dụng phương thức này.

`Object.assign()`: Dùng để sao chép các thuộc tính từ một hoặc nhiều Object khác nhau vào một Object mới.

```
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 4, c: 5, d: 6 };
const newObj = Object.assign({}, obj1, obj2);
console.log(newObj); // { a: 1, b: 4, c: 5, d: 6 }
```

`Object.keys()`: Dùng để trả về một mảng chứa tất cả các key của một Object.

```
const obj = { a: 1, b: 2, c: 3 };
const keys = Object.keys(obj);
console.log(keys); // ["a", "b", "c"]
```

`Object.values()`: Dùng để trả về một mảng chứa tất cả các giá trị của một Object.

```
const obj = { a: 1, b: 2, c: 3 };
const values = Object.values(obj);
console.log(values); // [1, 2, 3]
```

`Object.entries()`: Dùng để trả về một mảng chứa các cặp key-value của một Object.

```
const obj = { a: 1, b: 2, c: 3 };
const entries = Object.entries(obj);
console.log(entries); // [["a", 1], ["b", 2], ["c", 3]]
```

`Object.hasOwnProperty()`: Dùng để kiểm tra xem một Object có chứa một thuộc tính cụ thể hay không.

```
const obj = { a: 1, b: 2, c: 3 };
console.log(obj.hasOwnProperty("a")); // true
console.log(obj.hasOwnProperty("d")); // false
```

`Object.freeze()`: Dùng để đóng băng một Object, không cho phép thêm hoặc xóa thuộc tính.

```
const obj = { a: 1, b: 2, c: 3 };
Object.freeze(obj);
obj.a = 4; // không có hiệu lực
console.log(obj); // { a: 1, b: 2, c: 3 }
```

`Object.seal()`: Dùng để khóa một Object, cho phép thay đổi giá trị của thuộc tính nhưng không cho phép thêm hoặc xóa thuộc tính.

```
const obj = { a: 1, b: 2, c: 3 };
Object.seal(obj);
obj.a = 4; // có hiệu lực
obj.d = 5; // không có hiệu lực
console.log(obj); // { a: 4, b: 2, c: 3 }
```

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

---

## Prototype và prototype inheritance(cần bổ sung)

Trong JavaScript, mọi đối tượng đều có một thuộc tính prototype, Nó cho phép một object kế thừa các đặc tính của object khác thông qua prototype inheritance1. Bản thân prototype cũng là một object và chứa các thuộc tính và phương thức mà object có thể kế thừa2.

Prototype inheritance trong JavaScript cho phép đối tượng con thừa kế các thuộc tính và phương thức của đối tượng cha thông qua prototype của nó. Khi một thuộc tính hoặc phương thức được gọi trên một đối tượng, JavaScript trước tiên kiểm tra xem đối tượng đó có thuộc tính hoặc phương thức đó không. Nếu không, nó sẽ tìm kiếm trong prototype của đối tượng đó. Nếu prototype cũng không có, nó sẽ tìm kiếm trong prototype của prototype và tiếp tục như vậy cho đến khi nó tìm thấy thuộc tính hoặc phương thức đó hoặc đến khi không còn prototype nào để tìm kiếm.

---

## Các kiểu dữ liệu trong JS

Trong JavaScript, có sáu kiểu dữ liệu cơ bản được chia thành hai loại: kiểu dữ liệu nguyên thủy (_primitive data type_) và kiểu dữ liệu phức tạp (_complex data type_).

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

---

## Immutable và Mutable, Pass by value và Pass by reference

Immutable và Mutable, Pass by value và Pass by reference là các khái niệm cơ bản về cách dữ liệu được lưu trữ và truyền đạt trong chương trình.

1. `Immutable và Mutable`:

- `Immutable` (không thay đổi): Đối tượng được coi là không thay đổi nếu giá trị của nó không thể thay đổi sau khi nó được tạo ra. Trong JavaScript, các kiểu dữ liệu nguyên thủy (primitive data types) như `Number`, `String` và `Boolean` được coi là không thay đổi.
- `Mutable` (thay đổi): Đối tượng được coi là có thể thay đổi nếu giá trị của nó có thể thay đổi sau khi nó được tạo ra. Trong JavaScript, các kiểu dữ liệu phức tạp như `Object` và `Array` được coi là có thể thay đổi.

2. `Pass by value và Pass by reference`:

- `Pass by value` (truyền theo giá trị): Khi truyền đối số vào một hàm, giá trị của đối số được sao chép vào một biến mới trong hàm, và thay đổi giá trị của biến này sẽ không ảnh hưởng đến giá trị của biến gốc bên ngoài hàm. Các kiểu dữ liệu nguyên thủy (`Number`, `String`, `Boolean`, `null`, `undefined`, `Symbol`) được truyền theo giá trị.
- `Pass by reference` (truyền theo tham chiếu): Khi truyền đối số vào một hàm, tham chiếu của đối số (ví dụ: địa chỉ bộ nhớ của biến) được sao chép vào một biến mới trong hàm, và thay đổi giá trị của biến này sẽ ảnh hưởng đến giá trị của biến gốc bên ngoài hàm. Các kiểu dữ liệu phức tạp như `Object` và `Array` được truyền theo tham chiếu.

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

---

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

---

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

---

## so sánh setInterval và setTimeout

Cả hai hàm `setInterval` và `setTimeout` đều được sử dụng trong JavaScript để lập lịch thực hiện một tác vụ sau một khoảng thời gian nhất định.

Tuy nhiên, có một số sự khác biệt quan trọng giữa hai hàm này:

- `setTimeout` được sử dụng để thực hiện một tác vụ sau một khoảng thời gian nhất định, trong khi setInterval được sử dụng để thực hiện một tác vụ lặp đi lặp lại với một khoảng thời gian cố định giữa mỗi lần thực hiện.

- Khi sử dụng `setTimeout`, tác vụ chỉ được thực hiện một lần sau khi thời gian đã trôi qua. Trong khi đó, khi sử dụng setInterval, tác vụ sẽ được thực hiện lặp đi lặp lại sau một khoảng thời gian nhất định cho đến khi bạn ngừng hoặc hủy nó.

- Cả hai hàm đều trả về một ID cho việc xóa hoặc hủy lịch trình, tuy nhiên, ID được trả về bởi `setInterval` là duy nhất và có thể được sử dụng để ngừng hoặc hủy lịch trình được tạo ra bởi chính nó, trong khi ID được trả về bởi `setTimeout` có thể không duy nhất và có thể được sử dụng để hủy lịch trình được tạo ra bởi các hàm khác.

Vì vậy, khi muốn thực hiện một tác vụ sau một khoảng thời gian nhất định, bạn nên sử dụng `setTimeout`. Khi muốn lặp đi lặp lại một tác vụ với một khoảng thời gian cố định giữa mỗi lần thực hiện, bạn nên sử dụng `setInterval`.

---

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

---

## BOM và DOM là gì?

1. `BOM (Browser Object Model)` BOM là một mô hình đối tượng cho các trình duyệt web. Nó cho phép JavaScript truy cập và thao tác với các thành phần của trình duyệt như cửa sổ, khung (frame), vị trí (location), lịch sử (history),… BOM không phải là một chuẩn chính thức và có thể khác nhau giữa các trình duyệt.

2. `DOM (Document Object Model)` là một biểu diễn của cấu trúc trang web dưới dạng cây đối tượng. DOM bao gồm tất cả các phần tử trên trang web như các thẻ HTML, các thuộc tính và nội dung của chúng. DOM cung cấp các phương thức để truy cập và thay đổi nội dung của các phần tử trên trang web.

Mọi thành phần đều được xem là 1 nút (node), được biểu diễn trên 1 cây cấu trúc dạng cây gọi là DOM Tree. Các phần tử khác nhau sẽ được phân loại nút khác nhau nhưng quan trọng nhất là 3 loại: nút gốc (document node), nút phần tử (element node), nút văn bản (text node).

- Nút gốc: chính là tài liệu HTML, thường được biểu diễn bởi thẻ `<html>`.
- Nút phần tử: biểu diễn cho 1 phần tử HTML.
- Nút văn bản: mỗi đoạn kí tự trong tài liệu HTML, bên trong 1 thẻ HTML đều là 1 nút văn bản. Đó có thể là tên trang web trong thẻ `<title>`, tên đề mục trong thẻ `<h1>`, hay một đoạn văn trong thẻ

Điểm khác biệt giữa BOM và DOM là BOM tương tác với các thành phần của trình duyệt, trong khi DOM tương tác với cấu trúc của trang web. Cả BOM và DOM đều làm việc với JavaScript để tạo ra các tương tác động trên trang web.

---

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

---

## == và ===

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

---

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

- Sự khác biệt giữa `let` và `var`:

Biến được khai báo bằng `let` có phạm vi hoạt động (scope) trong khối mã mà nó được khai báo, trong khi biến được khai báo bằng `var` có phạm vi hoạt động trong hàm.
Biến được khai báo bằng `let` không thể khai báo lại, trong khi biến được khai báo bằng `var` có thể khai báo lại trong cùng phạm vi hoạt động.

- Sự khác biệt giữa `let` và `const`:

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

---

# ES6

---

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
Generators sử dụng từ khóa function\* để định nghĩa và có thể dừng lại và tiếp tục từ điểm dừng đó.

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

## Giải thích Capturing và Bubbling

1. Để JavaScript có thể nhận biết được một sự kiện xảy ra trong DOM, bạn có thể sử dụng phương thức `addEventListener()` để đăng ký một xử lý sự kiện cho một phần tử HTML. Phương thức này có hai tham số: tên của sự kiện và hàm xử lý sự kiện. Khi sự kiện xảy ra, hàm xử lý sự kiện được gọi

Ví dụ:

```
<button id="myButton">Click me</button>
document.getElementById("myButton").addEventListener("click", function() {
  alert("Hello world!");
});
```

2. Capturing và Bubbling là hai cách xử lý sự kiện (event handling) trong JavaScript, đặc biệt là khi sự kiện được gọi trên một phần tử DOM con bên trong một phần tử DOM cha.

Sự khác nhau giữa Capturing và Bubbling là cách sự kiện được lan truyền qua các phần tử trong cây DOM.

- `Capturing`: khi một sự kiện xảy ra trên một phần tử, sự kiện sẽ bắt đầu từ phần tử cha và lan truyền xuống các phần tử con cho đến khi đến phần tử được kích hoạt. Theo cách này, sự kiện sẽ được xử lý từ phần tử cha đến phần tử con.

- `Bubbling`: khi một sự kiện xảy ra trên một phần tử, sự kiện sẽ bắt đầu từ phần tử được kích hoạt và lan truyền lên đến các phần tử cha cho đến phần tử gốc của tài liệu (document). Theo cách này, sự kiện sẽ được xử lý từ phần tử con đến phần tử cha.

---

## Callback là gì? Giải thích event loop

- Callback là một hàm được truyền vào một hàm khác như một đối số và được gọi bởi hàm đó sau khi hoàn thành công việc của nó. Callback thường được sử dụng để xử lý các tác vụ bất đồng bộ trong JavaScript, ví dụ như khi tải tệp hoặc dữ liệu từ máy chủ1

- Event loop là một quá trình liên tục chạy trong JavaScript để giám sát cả call stack và callback queue. Nếu call stack không rỗng, event loop sẽ đợi cho đến khi nó rỗng và đưa hàm tiếp theo từ callback queue vào call stack. Nếu callback queue rỗng, không có gì xảy ra

Dưới đây là một ví dụ về event loop trong JavaScript:

```
console.log('Hi');

setTimeout(function() {
  console.log('there');
}, 5000);

console.log('Bing');
```

Khi bạn chạy đoạn mã này, nó sẽ in ra “Hi”, sau đó đợi 5 giây và in ra “there”, và cuối cùng là “Bing”. Điều này xảy ra vì setTimeout được sử dụng để đặt một hàm vào callback queue, và nó sẽ không được thực thi cho đến khi call stack rỗng

---

## Array và Multidimensional Array là gì?

1. Array là một kiểu dữ liệu trong JavaScript, được sử dụng để lưu trữ nhiều giá trị trong một biến. Một mảng có thể chứa bất kỳ kiểu dữ liệu nào, bao gồm các chuỗi, số và đối tượng. Mảng được đánh số bắt đầu từ 0, vì vậy phần tử đầu tiên của mảng có chỉ số 0.

Ví dụ, ta có thể tạo một Array để lưu trữ các số nguyên như sau:

```
let numbers = [1, 2, 3, 4, 5];
```

Ta có thể truy cập các giá trị trong Array bằng chỉ số như sau:

```
Copy code
console.log(numbers[0]); // 1
console.log(numbers[1]); // 2
console.log(numbers[2]); // 3
```

2. Multidimensional Array là một kiểu dữ liệu đặc biệt trong JavaScript, cho phép lưu trữ các Array khác bên trong một Array. Mỗi Array con trong Multidimensional Array được gọi là một phần tử, và các phần tử này có thể có số lượng các giá trị khác nhau.

Ví dụ, ta có thể tạo một Multidimensional Array để lưu trữ thông tin về các học sinh và điểm số của họ như sau:

```
let students = [  ['Alice', 85, 90, 92],
  ['Bob', 75, 80, 82],
  ['Charlie', 95, 98, 100]
];
```

Trong đó, mỗi phần tử là một Array con, chứa tên của học sinh và ba giá trị điểm số của họ. Ta có thể truy cập các giá trị trong Multidimensional Array bằng cách sử dụng chỉ số hai chiều như sau:

```
console.log(students[0][0]); // Alice
console.log(students[1][2]); // 82
console.log(students[2][1]); // 98
```

Multidimensional Array cũng có thể có nhiều chiều hơn hai, tùy thuộc vào nhu cầu lưu trữ và xử lý dữ liệu của ứng dụng.

## làm thế nào để truy cập, thay đổi và lặp qua các phần tử của mảng?

Để truy cập, thay đổi và lặp qua các phần tử của mảng trong JavaScript, ta có thể sử dụng các phương thức và toán tử như sau:

1. Truy cập các phần tử của mảng:

- Sử dụng toán tử `index []` để truy cập các phần tử của mảng theo chỉ số:

```
let arr = [1, 2, 3];
console.log(arr[0]); // 1
console.log(arr[1]); // 2
console.log(arr[2]); // 3
```

- Sử dụng phương thức `forEach()` để lặp qua các phần tử của mảng:

```
let arr = [1, 2, 3];
arr.forEach(function(element) {
  console.log(element);
});
```

2. Thay đổi các phần tử của mảng:

- Sử dụng toán tử `index []` để thay đổi giá trị của các phần tử trong mảng:

```
let arr = [1, 2, 3];
arr[0] = 4;
console.log(arr); // [4, 2, 3]
```

- Sử dụng phương thức `push()` để thêm một phần tử vào cuối mảng:

```
let arr = [1, 2, 3];
arr.push(4);
console.log(arr); // [1, 2, 3, 4]
```

- Sử dụng phương thức `pop()` để xóa phần tử cuối cùng của mảng:

```
let arr = [1, 2, 3];
arr.pop();
console.log(arr); // [1, 2]
```

- Sử dụng phương thức `splice()` để thay đổi các phần tử của mảng:

```
let arr = [1, 2, 3];
arr.splice(1, 1, 4, 5);
console.log(arr); // [1, 4, 5, 3]
```

3. Lặp qua các phần tử của mảng:

- Sử dụng vòng lặp `for` để lặp qua các phần tử của mảng theo chỉ số:

```
let arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

- Sử dụng phương thức `forEach()` để lặp qua các phần tử của mảng:

```
let arr = [1, 2, 3];
arr.forEach(function(element) {
  console.log(element);
});
```

- Sử dụng vòng lặp `for...of` để lặp qua các phần tử của mảng:

```
let arr = [1, 2, 3];
for (let element of arr) {
  console.log(element);
}
```

---

## JSON và AJAX

1. Khái niệm

- JSON (JavaScript Object Notation) là một định dạng dữ liệu phổ biến được sử dụng để truyền tải dữ liệu giữa các ứng dụng. Nó được lấy cảm hứng từ cú pháp đối tượng của JavaScript và cho phép các ứng dụng giao tiếp với nhau bằng cách truyền tải dữ liệu dưới dạng văn bản. JSON được sử dụng để lưu trữ và truyền tải dữ liệu dưới dạng một tập hợp các cặp key-value và có thể được chuyển đổi sang đối tượng JavaScript để thực hiện các xử lý dữ liệu.

Có nhiều cách để lấy dữ liệu từ JSON, tùy thuộc vào ngôn ngữ và công cụ bạn sử dụng. Một cách phổ biến là sử dụng phương thức `fetch()` trong JavaScript1. Phương thức này cho phép bạn gửi yêu cầu đến một tài nguyên trên web và nhận về một đối tượng Promise chứa kết quả1. Bạn có thể sử dụng phương thức `json()` của đối tượng Promise để chuyển đổi kết quả thành một đối tượng JavaScript từ JSON

- AJAX (Asynchronous JavaScript And XML) là một kỹ thuật cho phép gửi yêu cầu HTTP đến máy chủ và nhận phản hồi từ máy chủ mà không làm tải lại trang web. Khi sử dụng AJAX, trang web có thể thay đổi nội dung của mình mà không cần tải lại trang, giúp tăng trải nghiệm người dùng. AJAX thường được sử dụng để tải dữ liệu từ máy chủ và cập nhật nội dung của trang web mà không cần tải lại trang.

Khi sử dụng AJAX để truyền tải dữ liệu giữa các ứng dụng, JSON thường được sử dụng để định dạng dữ liệu vì nó có cú pháp đơn giản, dễ đọc và dễ sử dụng, và có thể được chuyển đổi sang đối tượng JavaScript để thực hiện các xử lý dữ liệu. Tuy nhiên, AJAX không yêu cầu sử dụng JSON và có thể sử dụng các định dạng dữ liệu khác như XML hoặc HTML để truyền tải dữ liệu.

2. Cách thức triển khai AJAX
   Để triển khai AJAX, cần sử dụng các kỹ thuật của JavaScript để gửi yêu cầu HTTP đến máy chủ và nhận phản hồi từ máy chủ mà không cần tải lại trang web. Các bước triển khai AJAX cơ bản như sau:

- Tạo đối tượng XMLHttpRequest: Đối tượng này là đối tượng cơ bản của AJAX, được sử dụng để gửi yêu cầu đến máy chủ và nhận phản hồi từ máy chủ.

- Thiết lập yêu cầu: Thiết lập các thông số yêu cầu như phương thức HTTP, URL, tham số, header, v.v.

- Xử lý phản hồi: Xử lý phản hồi từ máy chủ bằng cách sử dụng các sự kiện như onreadystatechange và onload.

- Gửi yêu cầu: Sử dụng đối tượng XMLHttpRequest để gửi yêu cầu đến máy chủ.

- Cập nhật nội dung trang web: Cập nhật nội dung trang web bằng cách sử dụng kết quả trả về từ máy chủ.

Một số thư viện và framework JavaScript phổ biến như jQuery, Axios, hay fetch đã hỗ trợ triển khai AJAX dễ dàng và nhanh chóng hơn bằng cách đóng gói các bước trên thành các hàm hoặc API.

---

## Fetch và Axios

Fetch và Axios đều là các thư viện JavaScript được sử dụng để thực hiện các yêu cầu HTTP trong các ứng dụng web. Cả hai đều hỗ trợ các phương thức như GET, POST, PUT, DELETE và cung cấp các tính năng như bắt lỗi, hủy request, chuyển đổi dữ liệu JSON.

Tuy nhiên, chúng có một số khác biệt:

1. Fetch là một API được xây dựng sẵn trong trình duyệt, trong khi Axios là một thư viện bên thứ ba cần được import vào ứng dụng JavaScript.

2. Fetch sử dụng Promise để xử lý kết quả phản hồi, trong khi Axios sử dụng Promise và cũng hỗ trợ callback.

3. Fetch trả về một đối tượng Response, trong khi Axios trả về một đối tượng Response được bọc trong một đối tượng Promise.

4. Fetch không xử lý các lỗi mạng như Axios, nó chỉ bắn ra một lỗi lớp Application nếu có.

Dưới đây là một ví dụ về cách sử dụng Fetch để gửi yêu cầu GET đến API của Github và lấy danh sách các repository của một người dùng:

```

fetch('https://api.github.com/users/octocat/repos')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));

```

Và dưới đây là một ví dụ về cách sử dụng Axios để thực hiện cùng một yêu cầu GET:

```

axios.get('https://api.github.com/users/octocat/repos')
.then(response => console.log(response.data))
.catch(error => console.error(error));

```

Cả hai ví dụ đều sử dụng các phương thức fetch và axios để thực hiện yêu cầu GET đến API của Github và lấy danh sách các repository của người dùng "octocat". Tuy nhiên, cách sử dụng Promise và các đối tượng được trả về của hai thư viện này khác nhau.

---

## Write Arrow Functions with Parameters

- Giống như một hàm thông thường, bạn có thể truyền tham số vào trong một hàm mũi tên (arrow function).

Ví dụ:

```

const doubler = (item) => item \* 2;
doubler(4);

```

Trong đó, doubler(4) sẽ trả về giá trị là 8.

- Nếu một hàm mũi tên chỉ có một tham số, bạn có thể bỏ qua dấu ngoặc đơn () bao quanh tham số.

Ví dụ:

```

const doubler = item => item \* 2;

```

- Ngoài ra, bạn cũng có thể truyền nhiều hơn một tham số vào một hàm mũi tên.

Ví dụ:

```

const multiplier = (item, multi) => item \* multi;
multiplier(4, 2);

```

---

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

---

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

---

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

---

## Polyfills và transpilers

Polyfills và transpilers là hai công nghệ khác nhau được sử dụng trong việc phát triển web để hỗ trợ các tính năng mới hoặc các phiên bản trình duyệt cũ hơn.

- Polyfill là một đoạn mã JavaScript được viết để đáp ứng những tính năng mới của JavaScript, CSS hoặc HTML5 trong các trình duyệt cũ hơn không hỗ trợ chúng. Khi một trình duyệt cố gắng chạy mã mới này, nó sẽ không hiểu được và có thể gây ra lỗi hoặc không hoạt động. Do đó, một polyfill có thể được sử dụng để cung cấp các hàm hay phương thức mới cho các trình duyệt cũ hơn.

- Transpiler là một công cụ sử dụng để chuyển đổi mã từ một phiên bản của JavaScript hoặc các ngôn ngữ khác sang một phiên bản khác có thể được hiểu bởi các trình duyệt cũ hơn. Ví dụ, nếu bạn muốn sử dụng các tính năng của phiên bản mới của JavaScript nhưng vẫn muốn hỗ trợ các trình duyệt cũ hơn, bạn có thể sử dụng một transpiler để chuyển đổi mã của bạn thành phiên bản cũ hơn của JavaScript, như ES5.

Vì vậy, polyfill và transpiler đều giúp cho việc phát triển web linh hoạt hơn, đáp ứng được nhiều trình duyệt khác nhau và hỗ trợ các tính năng mới của ngôn ngữ.

---

## IIFE

IIFE là viết tắt của `Immediately Invoked Function Expression` (biểu thức hàm được gọi ngay lập tức). Nó là một loại hàm được khai báo và thực thi ngay lập tức sau khi được định nghĩa.

Ví dụ:

```

(function () {
// Khai báo và thực thi mã trong hàm này
})();

```

Trong đoạn mã này, chúng ta sử dụng cặp dấu ngoặc đơn bao bọc một hàm, sau đó sử dụng toán tử gọi hàm () ngay sau đó để thực thi hàm đó. Do đó, hàm này sẽ được thực thi ngay lập tức sau khi được định nghĩa.

IIFE thường được sử dụng để tạo một phạm vi biến cục bộ (local scope) và tránh xung đột biến trong chương trình. Nó cũng được sử dụng để giữ các biến và hàm bên trong phạm vi và tránh chúng bị truy cập từ bên ngoài.

---

# OOP

```

```
