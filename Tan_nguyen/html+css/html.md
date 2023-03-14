# summary
Target : chỉ định nơi mở liên kết

## Change text direction.

- Make the text below go right-to-left.

`<bdo dir="rtl">
What a beautiful day!
</bdo>`
- Các chữ cái "WHO" trong văn bản dưới đây là chữ viết tắt của "Tổ chức Y tế Thế giới". Sử dụng phần tử HTML để cung cấp chữ viết tắt được chỉ định của "WHO"

`<p>The <abbr title="World Health Organization"> WHO</abbr> was founded in 1948.</p>`

## Table
- add Caption `<caption>Names</caption>`
- Sử dụng `colspan` để làm cho phần tử TH đầu tiên kéo dài hai cột.
`<th 
colspan="2">Name</th>`
- Tương tự dùng `rowspan` để kéo dài 2 hàng
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
`type="A"` - 
`type="I"`
`type="a"`
`type="i"`