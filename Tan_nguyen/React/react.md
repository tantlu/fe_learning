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

### State and Lifecycle

**React Lifecycle**

1. Lifecycle of Components

Mỗi React class component có một vòng đời mà bạn có thể theo dõi và thao tác trong ba giai đoạn chính của nó.

Một khái niệm cơ bản và xuyên suốt trong React đó chính là component.

- Về cơ bản Component cho phép bạn chia giao diện người dùng thành các phần độc lập và có thể tái sử dụng và có logic xử lý riêng biệt.
- Về mặt khái niệm, các component giống như các hàm JavaScript. Chúng nhận các giá trị đầu vào (được gọi là “props”) và trả về các phần tử React mô tả những gì sẽ xuất hiện trên màn hình.
- Có 2 loại Component là Function Component, Class Component.
- Class components - Chúng phức tạp hơn functional components ở chỗ nó còn có: phương thức khởi tạo, life-cycle, hàm render() và quản lý state (data).
- một React class component là:

  - là một class ES6, nó sẽ là một component khi nó "kế thừa" React component.
  - có thể nhận props (trong hàm khởi tạo) nếu cần.
  - có thể maintain data của nó với state
  - phải có 1 method render() trả về 1 React element (JSX), or null

- Các React class component có một đối tượng trạng thái (state) được tích hợp sẵn.

  - Đối tượng state là nơi bạn lưu trữ các giá trị thuộc tính thuộc về component.

  - Khi đối tượng trạng thái thay đổi, component sẽ được hiển thị lại.

NOTE: Luôn sử dụng phương thức setState () để thay đổi đối tượng state, nó sẽ đảm bảo rằng component biết nó đã được cập nhật và gọi phương thức render () để hiển thị lại dữ liệu cho chính xác (và tất cả các phương thức vòng đời khác). 2. Ba giai đoạn là: Mounting, Updating, and Unmounting.

- **Mounting**

Mounting - mình dịch trên GG có nghĩa là "gắn"; nên có thể hiểu đơn giản Mounting có nghĩa là gắn các component vào DOM. Ở giai đoạn này React có bốn phương thức tích hợp được gọi, theo thứ tự này, khi gắn kết một thành phần:

- constructor()
- static getDerivedStateFromProps()
- render() \*
- componentDidMount()
  Phương thức render () là bắt buộc và sẽ luôn được gọi, các phương thức khác là tùy chọn và sẽ được gọi nếu bạn định nghĩa lại chúng (OverRiding).
- **Updating**
  Giai đoạn tiếp theo trong vòng đời là khi một component được cập nhật.

Một component được cập nhật bất cứ khi nào có thay đổi về state hoặc props của thành phần.

Ở giai đoạn này React có năm phương thức tích hợp được gọi, theo thứ tự này, khi một thành phần được cập nhật:

- static getDerivedStateFromProps()

- shouldComponentUpdate()

- render() \*

- getSnapshotBeforeUpdate()

- componentDidUpdate()

Phương thức render () là bắt buộc và sẽ luôn được gọi, các phương thức khác là tùy chọn và sẽ được gọi nếu bạn định nghĩa lại chúng (OverRiding).

- **Unmounting**

Giai đoạn tiếp theo trong vòng đời là khi một component bị xóa khỏi DOM, hoặc bị ngắt kết nối.

React chỉ có một phương thức tích hợp được gọi khi một component được ngắt kết nối:

componentWillUnmount()

3. Chi tiết các hàm

- `constructor()`
  Tương tự với các ngôn ngữ lập trình hướng đối tương khác.

`constructor()` là phương thức được gọi đầu tiên, ngày sau khi component được khởi tạo và nó là nơi để khởi tạo trạng thái ban đầu và các giá trị ban đầu khác cho component.

Phương thức `constructor()` được gọi với props, như là các tham số, và bạn phải luôn bắt đầu bằng cách gọi super (props) trước bất kỳ thứ gì khác, điều này sẽ khởi tạo phương thức constructor của cha và cho phép thành phần kế thừa các phương thức từ cha của nó.

`contructor()` luôn được gọi khi bạn khởi tạo đối tượng.

```
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "green"};
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}
```

- static `getDerivedStateFromProps()`
  Ở giai đoạn Mounting

Phương thức `getDerivedStateFromProps()` được gọi ngay trước khi render component trong DOM.

Đây là nơi để thiết lập đối tượng State dựa trên các props ban đầu.

Nó nhận State như một tham số và trả về một đối tượng có các thay đổi state.

Ví dụ bên dưới bắt đầu với màu yêu thích là "green", nhưng phương thức `getDerivedStateFromProps()` cập nhật màu yêu thích dựa trên thuộc tính favcol được truyền vào hàm render():

```
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "green"};
  }

  static getDerivedStateFromProps(props, state) {
    return {favoritecolor: props.favcolor};
  }

  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}

ReactDOM.render(<Header favcolor="yellow"/>, document.getElementById('root'));
```

Tại giai đoạn UPDATE, phương thức getDerivedStateFromProps cũng được gọi đầu tiên khi một component được cập nhật.

Đây vẫn là nơi để thiết lập State dựa trên các props ban đầu.

Ví dụ bên dưới có một nút thay đổi màu yêu thích thành màu xanh, nhưng vì phương thức getDerivedStateFromProps () được gọi, cập nhật trạng thái với màu từ thuộc tính favcol (màu vàng), màu yêu thích vẫn được hiển thị dưới dạng màu vàng:

```
class Header extends React.Component {
  constructor(props) { // 2
    super(props);
    this.state = {favoritecolor: "green"};
  }
  static getDerivedStateFromProps(props, state) { // 3, 6
    return {favoritecolor: props.favcol };
  }
  changeColor = () => { // 5
    this.setState({favoritecolor: "blue"});
  }
  render() { // 4, 7
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}

ReactDOM.render(<Header favcol="yellow"/>, document.getElementById('root')); // 1
```

NOTE: getDerivedStateFromProps() luôn được gọi trước khi thực hiện render()

- render()

Phương thức render () là bắt buộc ở giai đoạn (Mounting, Update) và là phương thức thực sự xuất HTML ra DOM.

```
class Header extends React.Component {
  render() {
    return (
      <h1>This is the content of the Header component</h1>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));
```

- componentDidMount()
  Phương thức componentDidMount () được gọi sau khi component đó đã được gắn vào trong DOM (đã hiển thị).

(được thực thi sau lần hiển thị đầu tiên chỉ ở phía client. Đây là nơi các thực hiện AJAX và cập nhật DOM hoặc state sẽ xảy ra. Phương pháp này cũng được sử dụng để tích hợp với các khung JavaScript khác và bất kỳ hàm nào có quá trình thực thi như setTimeout hoặc setInterval.)

```
class Header extends React.Component {
  constructor(props) { // 2
    super(props);
    this.state = {favoritecolor: "red"};
  }
  componentDidMount() { // 4
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 1000)
  }
  render() { // 3
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('root')); // 1
```

- shouldComponentUpdate
  Trong phương thức shouldComponentUpdate (), trả về một giá trị Boolean chỉ định liệu React có nên tiếp tục update component hay không.

Giá trị mặc định là true.

Ví dụ dưới đây cho thấy điều gì sẽ xảy ra khi phương thức shouldComponentUpdate () trả về false:

```
class Header extends React.Component {
  constructor(props) { // 2
    super(props);
    this.state = {favoritecolor: "red"};
  }
  shouldComponentUpdate() { // 5
    return false;
  }
  changeColor = () => { // 4
    this.setState({favoritecolor: "blue"});
  }
  render() { // 3
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('root')); // 1
```

Để dễ hình dùng các bạn có thể nhìn lại hình ở phía trên. KhishouldComponentUpdate() trả về false thì sẽ không thực hiện gì tiếp theo.

Sau khi component đã được gắn vào DOM (đã thực hiện hàm render 1 lần với màu đỏ ở giai đoạn Mounting), ta thực hiện action click button -> hàm changeColor() được thực hiện (thực hiện update lại state) như bình thường khi state được update thì hàm render() sẽ được gọi để update với màu xanh nhưng, shouldComponentUpdate() lại trả về false tức là `dù cho bất cứ điều gì cũng không được thực hiện render (thay đổi)`

- getSnapshotBeforeUpdate
  Trong phương thức getSnapshotBeforeUpdate (), bạn có quyền truy cập vào các props và state trước khi cập nhật, có nghĩa là ngay cả sau khi cập nhật, bạn vẫn có thể kiểm tra các giá trị trước khi cập nhật.

Nếu có phương thức getSnapshotBeforeUpdate (), bạn cũng nên bao gồm phương thức componentDidUpdate (), nếu không bạn sẽ gặp lỗi.

```
class Header extends React.Component {
  constructor(props) { // 2. RED
    super(props);
    this.state = {favoritecolor: "red"};
  }
  componentDidMount() { // 4. RED -> YELLOW
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 1000)
  }
  getSnapshotBeforeUpdate(prevProps, prevState) { // 5.
    document.getElementById("div1").innerHTML =
    "Before the update, the favorite was " + prevState.favoritecolor;
  }
  componentDidUpdate() { // 6
    document.getElementById("div2").innerHTML =
    "The updated favorite is " + this.state.favoritecolor;
  }
  render() { // 3. RED, 7. YELLOW; div1: RED
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('root')); // 1

```

- Khi component được gắn kết (Mounting), nó được hiển thị với màu yêu thích "RED".

Khi component đã gắn vào DOM, một bộ đếm thời gian sẽ thay đổi State, sau một giây, màu yêu thích sẽ trở thành "YELLOW".

Hành động này kích hoạt giai đoạn UPDATE và vì thành phần này có phương thức getSnapshotBeforeUpdate (), phương thức này được thực thi và ghi dữ liệu cũ (RED) vào phần tử DIV1 trống.

Sau đó, phương thức componentDidUpdate () tiếp tục được thực thi và viết một dữ liệu hiện tại (YELLOW) trong phần tử DIV2 trống.

- componentDidUpdate

Phương thức componentDidUpdate() được gọi sau khi thành phần được cập nhật trong DOM.

```
class Header extends React.Component {
  constructor(props) { // 1
    super(props);
    this.state = {favoritecolor: "red"};
  }
  componentDidMount() { // 3
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 1000)
  }
  componentDidUpdate() { // 4
    document.getElementById("mydiv").innerHTML =
    "The updated favorite is " + this.state.favoritecolor;
  }
  render() { // 2, 5
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <div id="mydiv"></div>
      </div>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));
```

- componentWillUnmount

Phương thức componentWillUnmount được gọi khi thành phần sắp bị xóa khỏi DOM.

```
class Container extends React.Component {
  constructor(props) { // 1
    super(props);
    this.state = {show: true};
  }
  delHeader = () => { // 4
    this.setState({show: false});
  }
  render() { // 2, 6
    let myheader;
    if (this.state.show) {
      myheader = <Child />;
    };
    return (
      <div>
      {myheader}
      <button type="button" onClick={this.delHeader}>Delete Header</button>
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() { // 5
    alert("The component named Header is about to be unmounted.");
  }
  render() { // 3
    return (
      <h1>Hello World!</h1>
    );
  }
}

ReactDOM.render(<Container />, document.getElementById('root'));
```

### Handling Events

Với React thì việc xử lý các Event cũng giống như là DOM element, chỉ có một vài điểm khác biệt như sau:

- React element thì sử dụng camelCase conventio, ko giống như là DOM element là sử dụng lowercase
- Với JSX thì bạn có thể xử lý các sự kiện bằng cách sử dụng event handle chứ ko giống DOM truyền vào 1 chuỗi string

1. `SyntheticEvent`

Trong React, `SyntheticEvent` là một đối tượng được tạo ra để đóng gói sự kiện (event) được tạo ra bởi trình duyệt. Đối tượng `SyntheticEvent` là một bản sao của đối tượng sự kiện (event) mà có thể được sử dụng để xử lý các sự kiện (event) trong React.

Việc sử dụng `SyntheticEvent` trong React có nhiều lợi ích, bao gồm:

- Tránh việc sử dụng event pooling, giúp tối ưu hóa hiệu suất ứng dụng.
- Các `SyntheticEvent` sẽ được hủy bỏ (được giải phóng bộ nhớ) sau khi xử lý sự kiện, giúp giảm thiểu lãng phí bộ nhớ.
  Khi sử dụng `SyntheticEvent`, chúng ta có thể truy cập tất cả các thuộc tính (property) và phương thức (method) của đối tượng sự kiện (event) gốc thông qua thuộc tính
- Các thuộc tính của đối tượng `SyntheticEvent` trong React có các tác dụng như sau:

`bubbles (boolean)`: chỉ ra sự kiện có nổi bọt hay không. Nếu có nổi bọt thì sự kiện sẽ được lan truyền từ phần tử con lên đến phần tử cha.

`cancelable (boolean)`: chỉ ra sự kiện có thể bị hủy bỏ hay không.

`currentTarget (DOMEventTarget)`: đối tượng mà trình xử lý sự kiện được gắn vào.

`defaultPrevented (boolean)`: chỉ ra liệu phương thức preventDefault() đã được gọi hay chưa.

`eventPhase (number)`: chỉ ra giai đoạn của vòng đời sự kiện. Có thể có 3 giá trị: CAPTURING_PHASE (1), AT_TARGET (2), hoặc BUBBLING_PHASE (3).

`isTrusted (boolean)`: chỉ ra liệu sự kiện đã được tạo ra bởi người dùng hay bởi chương trình.

`nativeEvent (DOMEvent)`: đối tượng sự kiện (event) gốc được tạo ra bởi trình duyệt, cho phép chúng ta truy cập các thuộc tính và phương thức của sự kiện (event) gốc.

`preventDefault() (function)`: phương thức để ngăn chặn hành vi mặc định của sự kiện (event), ví dụ: chặn việc chuyển trang khi người dùng click vào một liên kết (<a> tag).

`isDefaultPrevented() (function)`: phương thức để kiểm tra xem phương thức preventDefault() đã được gọi hay chưa.

`stopPropagation() (function)`: phương thức để ngăn chặn sự kiện (event) lan truyền đến các phần tử khác trên DOM.

`isPropagationStopped() (function)`: phương thức để kiểm tra xem phương thức stopPropagation() đã được gọi hay chưa.

`target (DOMEventTarget)`: đối tượng DOM mà sự kiện đã xảy ra trên.

`timeStamp (number)`: thời gian (timestamp) mà sự kiện được tạo ra.

`type (string)`: loại sự kiện (event) được kích hoạt, ví dụ: "click", "keydown", "submit",...

2. Method Refer
   Với React element thì các bạn không cần phải sử dụng addEventListener để add event vào các element mới được tạo. Ví dụ như sau

```
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);

```

Với ví dụ trên thì khi state thay đổi thì Button sẽ được render lại, và nếu với DOM element thì sau khi render button mới thì các bạn sẽ phải sử dụng addEventListener để add sự kiện onClick vào cho button mới. Nhưng với React element thì khi button được render lại thì mặc nhiên element đã được add sự kiên onClick.

Lưu ý khi các bạn sử dụng từ khóa this trong JSX, do các method của javascript không được bind một cách mặc định nên nếu bạn quên làm việc đó thì khi sử dụng this.method sẽ trả về undefine.

### Conditional Rendering

Các thành phần của bạn thường sẽ cần hiển thị những thứ khác nhau tùy thuộc vào các điều kiện khác nhau. Trong React, bạn có thể kết xuất JSX một cách có điều kiện bằng cách sử dụng cú pháp JavaScript như câu lệnh if, && và ? : toán tử.

1. Trả về JSX có điều kiện
   Let’s say you have a PackingList component rendering several Items, which can be marked as packed or not:

```
function Item({ name, isPacked }) {
  return <li className="item">{name}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item
          isPacked={true}
          name="Space suit"
        />
        <Item
          isPacked={true}
          name="Helmet with a golden leaf"
        />
        <Item
          isPacked={false}
          name="Photo of Tam"
        />
      </ul>
    </section>
  );
}
```

Bạn muốn thêm dấu kiểm (✔) vào các mặt hàng được đóng gói nếu isPacked={true}.

```
function Item({ name, isPacked }) {
  if (isPacked) {
    return <li className="item">{name} ✔</li>;
  }
  return <li className="item">{name}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item
          isPacked={true}
          name="Space suit"
        />
        <Item
          isPacked={true}
          name="Helmet with a golden leaf"
        />
        <Item
          isPacked={false}
          name="Photo of Tam"
        />
      </ul>
    </section>
  );
}
```

2. Conditionally returning nothing with null

Trong một số trường hợp, bạn sẽ không muốn kết xuất bất cứ thứ gì. Ví dụ: giả sử bạn hoàn toàn không muốn hiển thị các mặt hàng được đóng gói. Một thành phần phải trả lại một cái gì đó. Trong trường hợp này, bạn có thể trả về null:

Nếu isPacked là true, thành phần này sẽ không trả về gì cả, null. Nếu không, nó sẽ trả về JSX để kết xuất.

```
function Item({ name, isPacked }) {
  if (isPacked) {
    return null;
  }
  return <li className="item">{name}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item
          isPacked={true}
          name="Space suit"
        />
        <Item
          isPacked={true}
          name="Helmet with a golden leaf"
        />
        <Item
          isPacked={false}
          name="Photo of Tam"
        />
      </ul>
    </section>
  );
}
```

3. Conditional (ternary) operator (? :)

JavaScript có một cú pháp nhỏ gọn để viết một biểu thức điều kiện — toán tử điều kiện hay “toán tử bậc ba”.

Instead of this:

```
if (isPacked) {
  return <li className="item">{name} ✔</li>;
}
return <li className="item">{name}</li>;
```

You can write this:

```
return (
  <li className="item">
    {isPacked ? name + ' ✔' : name}
  </li>
);
```

Sửa lại đoạn code ban đầu 1 chút

```
function Item({ name, isPacked }) {
  return (
    <li className="item">
      {isPacked ? (
          name + ' ✔'
      ) : (
        name
      )}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item
          isPacked={true}
          name="Space suit"
        />
        <Item
          isPacked={true}
          name="Helmet with a golden leaf"
        />
        <Item
          isPacked={false}
          name="Photo of Tam"
        />
      </ul>
    </section>
  );
}
```

4. Logical AND operator (&&)

Một phím tắt phổ biến khác mà bạn sẽ gặp là toán tử logic AND (&&) của JavaScript. Bên trong các thành phần React, nó thường xuất hiện khi bạn muốn hiển thị một số JSX khi điều kiện là đúng hoặc không hiển thị gì khác. Với &&, bạn chỉ có thể hiển thị dấu kiểm một cách có điều kiện nếu isPacked là đúng:
From

```
function Item({ name, isPacked }) {
  if (isPacked) {
    return <li className="item">{name} ✔</li>;
  }
  return <li className="item">{name}</li>;
}
```

To

```
function Item({ name, isPacked }) {
  return (
  <li className="item">
    {name} {isPacked && '✔'}
  </li>
);
}
```
6. Conditionally assigning JSX to a variable

Khi các phím tắt trở nên gây trở ngại trong việc viết mã plain code, bạn có thể thử sử dụng lệnh if và một biến để gán JSX theo điều kiện. Bạn có thể gán lại giá trị cho các biến được định nghĩa bằng let, bắt đầu bằng việc cung cấp nội dung mặc định mà bạn muốn hiển thị, tên:

`let itemContent = name;`

Sử dụng lệnh if để gán lại biểu thức JSX vào biến itemContent nếu isPacked là true:
```
if (isPacked) {
  itemContent = name + " ✔";
}
```
Dấu ngoặc nhọn mở ra "Window into JavaScript". Nhúng biến với dấu ngoặc nhọn vào cây JSX được trả về, lồng biểu thức tính toán trước đó vào trong JSX:
```
<li className="item">
  {itemContent}
</li>
```
This style is the most verbose, but it’s also the most flexible. Here it is in action:
```
function Item({ name, isPacked }) {
  let itemContent = name;
  if (isPacked) {
    itemContent = name + " ✔";
  }
  return (
    <li className="item">
      {itemContent}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}

```
7. Recap
- Trong React, bạn có thể điều khiển các logic phân nhánh bằng JavaScript. 
- Bạn có thể sử dụng lệnh if để điều kiển việc trả về một biểu thức JSX dựa trên điều kiện. 
- Bạn cũng có thể lưu trữ một biểu thức JSX một cách có điều kiện vào một biến và sau đó bao gồm nó trong JSX khác bằng cách sử dụng dấu ngoặc nhọn. 
- Trong JSX, biểu thức `{cond ? <A /> : <B />}` /có nghĩa là `"nếu cond, thì hiển thị <A />, nếu không, hiển thị <B />"`. 
- Trong JSX, biểu thức `{cond && <A />}` có nghĩa là `"nếu cond, thì hiển thị <A />, nếu không, không hiển thị gì cả"`. 
- Các phím tắt này thường được sử dụng, nhưng bạn không bắt buộc phải sử dụng chúng nếu bạn thích sử dụng lệnh if thông thường.