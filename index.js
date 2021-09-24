const content = document.getElementById('content')
const loan = document.getElementById('loan')
const debt = document.getElementById('debt')
const excash = document.getElementById('excash')
const livecost = document.getElementById('livecost')
const other = document.getElementById('other')
const date = document.getElementById('date')
const time = document.getElementById('time')
const addedBtn = document.getElementById('addedBtn')
const deletedBtn = document.getElementById('deletedBtn')
const list = document.getElementById('list');
addedBtn.addEventListener('click', function() {
    var a = parseInt(document.getElementById('content').value);
    var b = parseInt(document.getElementById('loan').value);
    var c = parseInt(document.getElementById('excash').value);
    var d = parseInt(document.getElementById('livecost').value);
    var e = parseInt(document.getElementById('other').value);
    var total = a - b + c - d * 30 - e;
    document.getElementById('sumId').value = total;
})
const listContent = []

function render() { //render(簡化功能)

    let htmlStr = ''
        //渲染頁面list
    listContent.forEach(function(item) {
        htmlStr = htmlStr + `
            <div class="item">
            <div class="title">
            <span>Asset Report</span>
            </div>
                <div class="itemlist">
                  <h3>我的月薪:<span>${item.content}</span></h3>
                  <Hr class="hr">
                    <p>額外收入:${item.excash}</p>
                    <p>當期貸款金額:${item.loan}</p>
                    <p>生活費:${item.livecost*30}</p>
                    <p>其他支出:${item.other}</p>
                    <p>日期:${item.date}</p>
                    <p>時間:${item.time}</p>
                    <p>所需支付負債:${item.debt}</p>
                    <Hr class="hr">
                    <div class="result">
                    <h2>這月的資產總額(不算負債):
                    <br/>
                    ${item.sumId}
                    </div>
                </div>
            </div>
      `
    })
    list.innerHTML = htmlStr
}

addedBtn.addEventListener('click', function() {

    listContent.unshift({
        content: content.value,
        excash: excash.value,
        loan: loan.value,
        livecost: livecost.value,
        other: other.value,
        date: date.value,
        time: time.value,
        debt: debt.value,
        sumId: sumId.value
    })
    render()
})
deletedBtn.addEventListener('click', function() {
    listContent.shift()
    render()
})