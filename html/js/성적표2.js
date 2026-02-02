let p = 0;
let layout = "<h3>성적표</h3><table>";
layout +=
  `<tr>
      <th>이름</th>
      <th>총점</th>
      <th>평균</th>
      <th>등급</th>
      </tr>`;
while (true) {
  let total = prompt('이름과 성적을 입력하세요\n(공백으로 구분해주세요)\n**종료하려면 취소를 눌러주세요');
  if (total == null) {
    break;
  }
  const myArry = total.split(' ');
  console.log(myArry);

  let sungjuk = function (x, ...score) {
    let result = 0;
    for (let i = 0; i < score.length; i++) {
      result += parseInt(score[i])
    }
    let p = parseInt(result / 3);
    let rank = '';
    switch (parseInt(p / 10)) {
      case 10:
      case 9: rank = 'A'; break;
      case 8: rank = 'B'; break;
      case 7: rank = 'C'; break;
      case 6: rank = 'D'; break;
      default: rank = 'F'
    }
    layout +=
      `<tr>
        <td>${x}</td>
        <td>${result}</td>
        <td>${p}</td>
        <td>${rank}</td>
      </tr>`;
  }

  sungjuk(...myArry);
}
layout += `</table>`;
document.write(layout);