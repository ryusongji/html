SELECT *
FROM emp;

--추가작업(origin merge 테스트)

SELECT *
FROM dept;

-- DML (INSERT, UPDATE, DELETE, MERGE)
-- 1) INSERT INTO table명 (컬럼1, 컬럼2,...) values(값1, 값2,...);
SELECT * FROM board;
DELETE FROM board
WHERE content like '%연습%';
commit;
ROLLBACK;
INSERT INTO board(board_no, title,content,writer)
values((select max(board_no)+1 from board)
    , :title
    , :writer
    , :content);

UPDATE board
SET click_cnt = click_cnt +1
    ,title = 'new title'
    ,content = 'new' || content
WHERE board_no = :bno;

-- max +1, 이름, SALESMAN, ,2026-02-01, 3000, 10,20
SELECT *
FROM emp;
INSERT INTO emp(EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)
values ((SELECT max(empno)+1 from emp)
    , '류송지'
    ,'SALESMAN'
    ,''
    , '2026-02-01'
    ,'3000'
    , '10'
    , '20');
UPDATE emp
SET MGR = '7698'

WHERE ENAME like '류송지';

-- 상품테이블
-- 상품코드, 상숨명, 가격, 상품설명, 평점, 제조사, 등록일자
-- key     nn      nn   nn       3          sysdate
CREATE TABLE product_tb (
    code number(10) PRIMARY KEY
    , title varchar2(30) not null
    , price number(10) not null
    , content varchar2(1000) not null
    , rank number(1) default 3
    , created varchar2(50)
    , created_at date default sysdate
);
INSERT INTO product_tb(code,title,price,content,rank,created)
VALUES (
    ('s'||lpad((max(substr(code,2,3))+1,4,'0') from product_tb)
--    (CASE WHEN (max(substr(code,2,3))+1) between '1' and '9' then '00'||(select max(substr(code,2,3))+1 from product_tb)
--         WHEN (max(substr(code,2,3))+1) between '10' and '99' then '0'||(select max(substr(code,2,3))+1 from product_tb)
--              ELSE (select max(substr(code,2,3))+1 from product_tb)
--    END)
    )
    , :title
    , :price
    , :content
    , :rank
    , :created
);
DELETE FROM product_tb;
ALTER TABLE product_tb modify code varchar2(100);
desc product_tb;
SELECT *
FROM product_tb;

merge into product_tb tb11
using ( select 'S001' code
    , 'adasda' title
    , '123' price
    , 'adasdsa' content
    FROM dual)tb12
on (tb11.code=tb12.code)
when matched then 
    UPDATE set
        tb11.title = tb12.title
        ,tb11.price = tb12.price
        ,tb11.content = tb12.content
when not matched then
    insert(code, title, price, content)
    values(tb12.code,tb12.title,tb12.price, tb12.content);