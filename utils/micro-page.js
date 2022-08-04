/** 
 * 对微页面的数据进行二次处理
 */
function formatComponent(pageComponents) {
  pageComponents.map((item) => {
    if (item.type === "魔方") {
      let items = item.items;
      let li = items[items.length - 1];
      let w = li.x + li.width;
      let h = li.y + li.height;
      let gtr = new Array(h).fill('1fr').join(' ');
      let gtc = new Array(w).fill('1fr').join(' ');
      let padding = item.padding_width + "px " + item.padding_width + "px " + item.padding_width + "px " + item.padding_width + "px";
      item.style = `grid-template-rows: ${gtr};grid-template-columns: ${gtc};height: ${(h / w) * 600}rpx;padding:${padding};border-radius: 10px 10px 10px 10px;`
      item.items.forEach(item => {
        let x = item.x + 1;
        let y = item.y + 1;
        let w = item.width;
        let h = item.height;
        let xe = x + w;
        let ye = y + h;
        item.style = `grid-column-start: ${x};grid-column-end: ${xe};grid-row-start: ${y};grid-row-end: ${ye};background-image:url('${item.img}');border-radius:5px;`
      })
    }
  })
  return pageComponents
}

module.exports = {
  formatComponent: formatComponent
}