    let p = 0;
    let layout = "<h3>성적표</h3><table>";
    layout+=
    `<tr>
      <th>이름</th>
      <th>총점</th>
      <th>평균</th>
      <th>등급</th>
    </tr>`;
    
    let sungjuk = function (x,...score) {
      let result = 0;
      for (let i = 0; i < score.length; i++) {
        result += score[i]
      }
      let p = parseInt(result/3);
      let rank ='';
      switch (parseInt(p/10)) {
        case 10 :
        case 9 : rank = 'A'; break;
        case 8 : rank = 'B'; break;
        case 7 : rank = 'C'; break;
        case 6 : rank = 'D'; break;
      }
      layout+=
      `<tr>
        <td>${x}</td>
        <td>${result}</td>
        <td>${p}</td>
        <td>${rank}</td>
      </tr>`; 
    }
    sungjuk('aaa', 80,90,99);
    sungjuk('bbb', 70,99,77);
    sungjuk('ccc', 88,30,88);
    layout+= `</table>`; 
    document.write(layout);