# Summary

## React là gì?

Trước tiên chúng ta sẽ định nghĩa React là gì.

- React là một thư viện được phát triển dựa trên Javascript, nó tới với trái đất để xây dựng giao diện người dùng.
- React sử dụng `function render()` để biến các giá trị đầu vào và trả về những gì sẽ hiển thị.
- React sử dụng cú pháp JSX để biểu diễn code, không bắt buộc sử dụng nhưng JSX được nhà phát triển React khuyến khích sử dụng
- React dựa vào `props` và `state` để gọi `function render()`, giúp cho những gì hiển thị luôn là mới nhất.

## JSX

- `JSX = Javascript + XML`. Nó transform cú pháp dạng gần như XML về thành Javascript. Giúp người lập trình có thể code ReactJS bằng cú pháp của XML thay vì sử dụng Javascript. Các XML elements, attributes và children được chuyển đổi thành các đối số truyền vào React.createElement.
- XML là viết tắt của từ eXtensible Markup Language, hay còn gọi là ngôn ngữ đánh dấu mở rộng do W3C đề nghị với mục đích tạo ra các ngôn ngữ đánh dấu khác. Đây là một tập hợp con đơn giản có thể mô tả nhiều loại dữ liệu khác nhau nên rất hữu ích trong việc chia sẻ dữ liệu giữa các hệ thống. Điển hình nhất là ngôn ngữ đánh dấu siêu văn bản HTML sử dụng cú pháp của XML để tạo nên và nó có các bộ phần tử và thuộc tính không mềm dẻo nên chỉ có tác dụng trong việc trình bày dữ liệu trên trình duyệt Browser.

1. Tại sao lại nên dùng JSX?

- Thứ nhất, JSX với cú pháp gần giống XML, cấu trúc cây khi biểu thị các attributes, điều đó giúp ta dễ dàng định nghĩa, quản lý được các component phức tạp, thay vì việc phải định nghĩa và gọi ra nhiều hàm hoặc object trong javascript. Khi nhìn vào cấu trúc đó cũng dễ dàng đọc hiểu được ý nghĩa của các component. Code JSX ngắn hơn, dễ hiểu hơn code JS.
- Thứ 2, JSX không làm thay đổi ngữ nghĩa của Javascript
- Thứ 3, với cách viết gần với các thẻ HTML, nó giúp những developers thông thường (ví dụ như các designer) có thể hiểu được một cách dễ dàng, từ đó có thể viết hoặc sửa code mà không gặp nhiều khó khăn.

2. một số quy tắc khi sử dụng JSX:

- Các thành phần JSX phải có một thẻ đóng tương ứng. Ví dụ, nếu bạn mở một thẻ `<div>` bạn phải đóng nó bằng cách sử dụng `</div>`.

- JSX không cho phép bạn sử dụng thuộc tính class, thay vào đó bạn phải sử dụng className. Ví dụ: `<div className="my-class"></div>`.

- JSX cũng không cho phép bạn sử dụng thuộc tính for, thay vào đó bạn phải sử dụng htmlFor. Ví dụ: `<label htmlFor="my-input"></label>`.

- Khi sử dụng các biểu thức JavaScript trong JSX, bạn phải đặt chúng trong cặp dấu ngoặc nhọn {}. Ví dụ: `<div>{myVariable}</div>`.

- Sau khi được compilation convert về javascript thì tất cả sẽ được convert về kiểu function và object và JSX Expressions cũng không là ngoại lệ. Vì vậy JSX Expressions còn có thể sử dụng trong các câu lệnh if, vòng lặp for,...

```
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```

- Để gán value cho các attribute các bạn có thể sử dụng 2 cách:

  1. sử dụng dấu quote "" (quotes)
  2. sử dụng dấu ngoặc nhọn** {}** (curly braces)

Sử dụng dấu Quote để gán giá trị attribute

`const element = <div tabIndex="0"></div>;`

Sử dụng curly braces để gán giá trị attribute

`const element = <img src={user.avatarUrl}></img>;`

- Các thành phần JSX phải chỉ có một phần tử gốc duy nhất. Điều này có nghĩa là bạn không thể có hai phần tử HTML trực tiếp kề nhau trong một thành phần. Bạn có thể sử dụng một phần tử cha để bao bọc các phần tử con của nó.

- JSX cũng hỗ trợ các thành phần JavaScript bình thường, cho phép bạn sử dụng các hàm và biến trong các thành phần của mình.

- Cuối cùng, nên nhớ rằng JSX chỉ là một cú pháp để tạo ra các thành phần UI, nó không thể được trực tiếp thực thi bởi trình duyệt. Thay vào đó, bạn cần phải sử dụng một công cụ như Babel để chuyển đổi cú pháp JSX thành JavaScript thuần túy có thể được hiểu bởi trình duyệt.

3. Cấu trúc thư mục của một ứng dụng React thường được tổ chức theo kiểu sau:

```
my-react-app/
  node_modules/
  public/
    index.html
    favicon.ico
  src/
    index.js
    App.js
    index.css
    assets/
    components/
      Component1.js
      Component2.js
    pages/
      Page1.js
      Page2.js
    utils/
      util1.js
      util2.js
  package.json
  README.md
```

- node_modules: chứa các module và thư viện mà ứng dụng sử dụng.

- public: chứa các file tĩnh không thay đổi trong quá trình chạy ứng dụng, bao gồm index.html và favicon.ico.

- src: chứa mã nguồn của ứng dụng.

- index.js: là file đầu vào của ứng dụng React, nơi mà chúng ta sẽ khởi tạo ứng dụng React và render các component (thành phần) vào trong DOM. File index.js thường bao gồm các lệnh để import React, ReactDOM, và các component của ứng dụng, sau đó nó gọi hàm ReactDOM.render() để render component vào một phần tử trong DOM.

- App.js: là một trong những component chính của ứng dụng React, nơi chúng ta sẽ xây dựng giao diện người dùng (UI) của ứng dụng. Trong file này, chúng ta sẽ import các thành phần khác nhau của ứng dụng, kết hợp chúng với nhau và render ra giao diện người dùng. Các thành phần này có thể là các thành phần của chính ứng dụng, hoặc các thành phần được import từ các thư viện bên ngoài. File App.js sẽ trả về một thành phần (element) đại diện cho toàn bộ giao diện người dùng của ứng dụng.

- index.css: là file CSS của ứng dụng.

- assets: chứa các file ảnh, icon, font và các tài nguyên khác.

- components: chứa các component của ứng dụng.

- pages: chứa các trang (pages) của ứng dụng, mỗi trang thường là một component hoặc một tập hợp các component.

- utils: chứa các hàm tiện ích và các tập tin khác.

- package.json: chứa các thông tin về ứng dụng và các phụ thuộc của nó.

- README.md: là file hướng dẫn cho người dùng sử dụng ứng dụng.

4. Về cơ bản, JSX chỉ cung cấp cú pháp đặc biệt cho hàm ` React.createElement(component, props, ...children)`
5. JSX Prevents Injection Attacks
   Everything is converted to a string before being rendered.

Tất cả các JSX Epressions sau khi được chạy trả về kết quả thì tất cả các giá trị trả về đều sẽ được convert hết về string, đảm bảo rằng không có một đoạn code thực thi nào được chạy sau khi convert, điều này giảm thiểu tối đa việc tấn công bằng XSS (cross-site-scripting)

## Rendering Elements

Elements được định nghĩa là đối tượng nhỏ nhất trong một ứng dụng React, và nó là gì

- React element không phải là DOM element
- React element nó là một plain objects
- Một React element sẽ mô tả những gì sẽ mà bạn muốn hiển thị trên page
  Như đã nói ở trên thì React element không phải là một DOM element và nó sẽ được React DOM mapping với brower DOM element.

### Rendering an Element into the DOM

- Các ứng dụng được xậy dựng bằng React thì mặc định sẽ có một node gọi là "root" và toàn bộ mọi thứ được chứa trong thẻ "root" thì đều được quản lý bởi React DOM
- Về cơ bản thì đây sẽ là node ngoài cùng của React, và với ReactJS thì thường sẽ là 1 thẻ div
  `<div id="root"></div>`

      1. Giữa các node "root" thì sẽ được cô lập và độc lập với nhau
      2. Các ứng dụng có thể define nhiều node root và các "root" được xác định bằng cách truyền id vào function ReactDOM.render()

          ```
          const element = <h1>Hello, world</h1>;
          ReactDOM.render(element, document.getElementById('root'));
          ```

### Updating the Rendered Element

Một React element là các đối tượng bất biến (immutable), nói một cách khác thì một khi các element được sinh ra thì ko thể bị thay đổi

Một cách ví von từ phía FB thì mỗi element thì mỗi element như là một khung hình trong một bộ phim vậy nó sẽ không bao giờ bị thay đổi.

Vậy React làm cách nào để update UI. Đơn giản React sẽ tạo ra một element MỚI, đưa nó vào function ReactDOM.render() và toàn bộ giao diện sẽ được render lại.

=> Để update UI trên page thì React sẽ tạo ra element mới và đưa nó vào ReactDOM.render() để render lại page Nghe thì có vẻ như không được perfomance lắm nhưng trên thực tế trước khi xử lý việc render lại UI thì React có một bước đó là kiểm tra lại toàn bộ các node trong page và chỉ update lại các node có sự thay đổi.

### React Render Lifecycle

Ở các thông tin phía trên thì đã mô tả về cách thức render ra html của React và câu hỏi tiếp theo là quy trình sẽ diễn ra như thế nào. React sẽ thực hiện Render khi có sự thay đổi về state hoặc prop tương ứng nhưu vậy thì sẽ có 2 thời điểm mà React sẽ thực hiện việc render

- Mounting: thời điểm Component được khởi tạo
- Updating: thời điểm Component được update state hoặc prop
  ![demo](https://images.viblo.asia/c904d01b-b340-46ad-af24-099fb8fde672.jpeg)

1. Render Phase : trong giai đoạn này, React chỉ xử lý và tạo ra các elements dựa trên props và state, mà không gây ảnh hưởng đến bất kỳ thành phần nào khác trong ứng dụng.

   Trong quá trình này, React có thể tạm dừng, hủy bỏ hoặc khởi động lại quá trình render phụ thuộc vào các điều kiện, nhưng không ảnh hưởng đến các thành phần khác trong ứng dụng.

   Giai đoạn Render là giai đoạn quan trọng của React, đảm bảo rằng các elements được tạo ra và hiển thị trên màn hình đúng cách và theo như mong đợi của người dùng.

### Components and Props

1. Components

ReactJs là sẽ chia nhỏ page thành các phần nhỏ (components) và các components hướng tới việc hoạt động độc lập với nhau. Còn về mặt hoạt động thì các Component vẫn là một Javascript Function, có thể truyền tùy ý Parameter (Props).

2. Function and Class Components

Khi sử dụng ReactJS chúng ta sẽ có 2 cách để định nghĩa 1 Component:

- Function
- Class

Cách đơn giản nhất là sử dụng Function:

```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

"Function" đáp ứng được yêu cầu của một component, nó nhận vào một Props (Props có thể là bất cứ là gì) và nó trả về một React Element. "Function" được sử dụng để làm component khi đó là một Component đơn giản, ít xử lý về logic hay các life cycle của React.

Còn ở một mức độ phức tạp hơn thì chúng ta sử dụng Class. Lưu ý là sử dụng ES6 để định nghĩa một class là Component.

```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

Class thì nó có nhiều chức năng hơn là một Function, chúng ta có thể handle các Life Cyle hay nói một cách khác, chúng ta nên sử dụng Class khi cần xử lý nhiều logic hay cần handle data ở nhiều thời điểm.

3. Rendering a Component

Cơ chế hoạt động như sau:

- Đầu tiên ReactJS sẽ gom toàn bộ các attributes và nhé nó vào 1 parameter tên là "props"
- React sẽ gọi Component đó như 1 function và truyền "props" vào
- React nhận về element mà Component trả về và hiển thị lên page

**Note: Tên Component bắt buộc phải bắt đầu bằng một ký tự viết hoa "<Welcome />"**

**Bởi vì DOM tags bắt đầu bằng các ký tự viết thường nên các Component phải viết hoa để tránh nhầm lẫn giữa 2 bên**

4. Extracting Components

```
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

```

Props có chứa cả 3 loại data:

- author (object)
- text (string)
- date (date)

Cả loại đều được sử dụng trong Component Comment, nhìn vào thì chúng ta sẽ thấy khá là rối và thực sự điều này là không tốt cho việc mainteance: Component nếu phân tích ra sẽ có các phần sau:

```
<div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
</div>
```

```
 <div className="Comment-text">
        {props.text}
</div>
```

```
<div className="Comment-date">
        {formatDate(props.date)}
</div>
```

Nếu như sau này cần sửa một trong 3 phần trên sẽ khá là rối mắt khi chúng ta cần tìm giới hạn của các phần trên. Và lợi thế của Component sẽ được thể hiện như sau: Chúng ta sẽ cùng chia nhỏ Component Comment thành các Component nhỏ hơn:

1. Component Avatar

```
function Avatar(props){
    return (
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
    );
}
```

Vì sao khi tạo Component Avatar thì ko sử dụng name là "author" mà sử dụng "user", thì bởi vì như sau:

Component Avatar có thể sử dụng nhiều nơi khác nữa nên việc sử dụng name "user" sẽ dễ dàng hơn cho việc đọc code.

Cho nên ở Component Component chúng ta chỉ việc truyền vào Component Avatar attribute "user" = "author"

```
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <Avatar user={props.author}/>
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

Nhìn code có vẻ vẫn hơi dài nhỉ. Mọi người có thể thấy chúng ta có thể tách `<div className="UserInfo">` làm một Component nữa. Dựa vào đâu để tách như vậy:

=> Tập trung vào mục đích sử dụng của Component, trong trường hợp này thì <div className="UserInfo"> sẽ là Component chịu trách nhiệm hiển thị toàn bộ thông tin của user, bao gồm avtar và tên

Và Component UserInfo sẽ được thiết kế như sau:

```
function UserInfo(){
    return (
        <div className="UserInfo">
            <Avatar user={props.user}>
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    )
}
```

sau đó viết lại đoạn code ban đầu

```
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

```
**Note: Việc Extra Component thì có các note như sau:**

- **Nên tính toán trước từ đầu để có thể dễ dàng tái sử dụng, tránh trường hợp code xong rồi mới nghĩ tới việc tách nhỏ Component**
- **Nên list hết các Component sử dụng nhiều trong App và tạo sẵn các Component đó, ví dụ như: Button, Panel, Avatar,...**

5. Props are Read-Only

Trong React, props (viết tắt của properties) là một cách để truyền dữ liệu từ component cha sang component con. Khi một component được khởi tạo với một bộ props cụ thể, giá trị của chúng sẽ không thể được thay đổi bên trong component đó.

Nói cách khác, props là "Read-Only", có nghĩa là chúng ta không nên thay đổi giá trị của các props trong component con. Nếu chúng ta cố gắng thay đổi giá trị của một prop, React sẽ không cho phép và thông báo lỗi trong quá trình runtime. Và React của chúng ta thì tuân theo một rule duy nhất đó "Pure Function" : Pure function là các function không làm thay đổi giá trị đầu vào và luôn trả về 1 kiểu định dạng

Điều này là để đảm bảo tính nhất quán và dễ dàng theo dõi trong quá trình phát triển ứng dụng, giúp giảm thiểu các lỗi khó kiểm tra do thay đổi giá trị của props trong quá trình thực thi.