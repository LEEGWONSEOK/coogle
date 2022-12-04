// SeedData 생성 스크립트

const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

conn.connect();

let seedData = [];

seedData.push(`
  INSERT INTO user (account, nickname) VALUES 
  ('test-account-01', '매콤한 떡볶이'),
  ('test-account-02', '씁쓸한 떡볶이'),
  ('test-account-03', '독산동 캐뤼머신'),
  ('test-account-04', '장계순'),
  ('test-account-05', '샛별요정');
  `);

seedData.push(`INSERT INTO recipe_category (title) VALUES 
  ('메인요리'),
  ('국·찌게'),
  ('밑반찬'),
  ('다이어트');
  `);

seedData.push(`
  INSERT INTO recipe (title, description, level, author, category) VALUES 
  ('소세지 야채 볶음', '집에서 즐길수 있는 소세지 야채볶음', 1, 1, 1),
  ('육군표 제육볶음', '집에서 즐길수 있는 군바리 제육볶음', 1, 1, 1),
  ('김치 소세지 볶음', '집에서 즐길수 있는 김치 소세지 볶음', 1, 1, 1),
  ('새우 볶음밥', '집에서 즐길수 있는 새우 볶음밥', 1, 2, 1),
  ('참치마요 볶음밥', '집에서 즐길수 있는 참치마요 볶음밥', 1, 2, 1),
  ('치즈 제육볶음', '집에서 즐길수 있는 치즈 제육볶음', 1, 2, 1),
  
  ('미역국', '집에서 즐길수 있는 미역국', 1, 1, 2),
  ('김치찌개', '집에서 즐길수 있는 김치찌개', 1, 1, 2),
  ('소고기 뭇국', '집에서 즐길수 있는 소고기 뭇국', 1, 1, 2),
  ('된장찌개', '집에서 즐길수 있는 된장찌개', 1, 2, 2),
  ('미소된장국', '집에서 즐길수 있는 미소된장국', 1, 2, 2),
  ('시래기국', '집에서 즐길수 있는 시래기국', 1, 2, 2)
  ;`);

seedData.push(`
  INSERT INTO recipe_content (step, image_url, content, recipe_id) VALUES 
  (1, 'www.naver.com', '1. 소세지와 야채를 깍둑썰기를 해주세요', 1),
  (2, 'www.naver.com', '2. 소세지와 야채를 깍둑썰기를 해주세요', 1),
  (3, 'www.naver.com', '3. 소세지와 야채를 깍둑썰기를 해주세요', 1),
  (4, 'www.naver.com', '4. 소세지와 야채를 깍둑썰기를 해주세요', 1),
  (1, 'www.naver.com', '1. 소세지와 야채를 깍둑썰기를 해주세요', 2),
  (2, 'www.naver.com', '2. 소세지와 야채를 깍둑썰기를 해주세요', 2),
  (3, 'www.naver.com', '3. 소세지와 야채를 깍둑썰기를 해주세요', 2),
  (4, 'www.naver.com', '4. 소세지와 야채를 깍둑썰기를 해주세요', 2),
  (1, 'www.naver.com', '1. 소세지와 야채를 깍둑썰기를 해주세요', 3),
  (2, 'www.naver.com', '2. 소세지와 야채를 깍둑썰기를 해주세요', 3),
  (3, 'www.naver.com', '3. 소세지와 야채를 깍둑썰기를 해주세요', 3),
  (4, 'www.naver.com', '4. 소세지와 야채를 깍둑썰기를 해주세요', 3),
  (1, 'www.naver.com', '1. 소세지와 야채를 깍둑썰기를 해주세요', 4),
  (2, 'www.naver.com', '2. 소세지와 야채를 깍둑썰기를 해주세요', 4),
  (3, 'www.naver.com', '3. 소세지와 야채를 깍둑썰기를 해주세요', 4),
  (4, 'www.naver.com', '4. 소세지와 야채를 깍둑썰기를 해주세요', 4),
  (1, 'www.naver.com', '1. 소세지와 야채를 깍둑썰기를 해주세요', 5),
  (2, 'www.naver.com', '2. 소세지와 야채를 깍둑썰기를 해주세요', 5),
  (3, 'www.naver.com', '3. 소세지와 야채를 깍둑썰기를 해주세요', 5),
  (4, 'www.naver.com', '4. 소세지와 야채를 깍둑썰기를 해주세요', 5),
  (1, 'www.naver.com', '1. 소세지와 야채를 깍둑썰기를 해주세요', 6),
  (2, 'www.naver.com', '2. 소세지와 야채를 깍둑썰기를 해주세요', 6),
  (3, 'www.naver.com', '3. 소세지와 야채를 깍둑썰기를 해주세요', 6),
  (4, 'www.naver.com', '4. 소세지와 야채를 깍둑썰기를 해주세요', 6),
  (2, 'www.naver.com', '2. 소세지와 야채를 깍둑썰기를 해주세요', 7),
  (1, 'www.naver.com', '1. 소세지와 야채를 깍둑썰기를 해주세요', 7),
  (3, 'www.naver.com', '3. 소세지와 야채를 깍둑썰기를 해주세요', 7),
  (4, 'www.naver.com', '4. 소세지와 야채를 깍둑썰기를 해주세요', 7),
  (1, 'www.naver.com', '1. 소세지와 야채를 깍둑썰기를 해주세요', 8),
  (2, 'www.naver.com', '2. 소세지와 야채를 깍둑썰기를 해주세요', 8),
  (3, 'www.naver.com', '3. 소세지와 야채를 깍둑썰기를 해주세요', 8),
  (4, 'www.naver.com', '4. 소세지와 야채를 깍둑썰기를 해주세요', 8),
  (1, 'www.naver.com', '1. 소세지와 야채를 깍둑썰기를 해주세요', 9),
  (2, 'www.naver.com', '2. 소세지와 야채를 깍둑썰기를 해주세요', 9),
  (3, 'www.naver.com', '3. 소세지와 야채를 깍둑썰기를 해주세요', 9),
  (4, 'www.naver.com', '4. 소세지와 야채를 깍둑썰기를 해주세요', 9),
  (1, 'www.naver.com', '1. 소세지와 야채를 깍둑썰기를 해주세요', 10),
  (2, 'www.naver.com', '2. 소세지와 야채를 깍둑썰기를 해주세요', 10),
  (3, 'www.naver.com', '3. 소세지와 야채를 깍둑썰기를 해주세요', 10),
  (4, 'www.naver.com', '4. 소세지와 야채를 깍둑썰기를 해주세요', 10),
  (1, 'www.naver.com', '1. 소세지와 야채를 깍둑썰기를 해주세요', 11),
  (2, 'www.naver.com', '2. 소세지와 야채를 깍둑썰기를 해주세요', 11),
  (3, 'www.naver.com', '3. 소세지와 야채를 깍둑썰기를 해주세요', 11),
  (4, 'www.naver.com', '4. 소세지와 야채를 깍둑썰기를 해주세요', 11),
  (1, 'www.naver.com', '1. 소세지와 야채를 깍둑썰기를 해주세요', 12),
  (2, 'www.naver.com', '2. 소세지와 야채를 깍둑썰기를 해주세요', 12),
  (3, 'www.naver.com', '3. 소세지와 야채를 깍둑썰기를 해주세요', 12),
  (4, 'www.naver.com', '4. 소세지와 야채를 깍둑썰기를 해주세요', 12)
  ;`);

seedData.push(`
  INSERT INTO recipe_ingredient (title, amount, type, recipe_id) VALUES 
  ('비엔나 소세지', '20개', '재료', 1),
  ('파프리카', '1/4개', '재료', 1),
  ('양파', '1/2개', '재료', 1),
  ('케첩', '2T', '조미료', 1),
  ('고추장', '1/2T', '조미료', 1),
  ('간장', '1/2T', '조미료', 1),
  ('올리고당', '1/2T', '조미료', 1),
  ('설탕', '1T', '조미료', 1),
  ('케첩', '1T', '조미료', 1);
  `);

seedData.push(`
  INSERT INTO tip_category (title) VALUES 
  ('요리 상식'),
  ('식재료 보관');
  `);

seedData.push(`
  INSERT INTO tip (title, content, category) VALUES 
  ('계량기 정보', '계량기 관련 정보가 들어갑니다', 1),
  ('귤 보관법', '귤 보관하는 방법이 들어갑니다', 2);
  `);

seedData.push(`
  INSERT INTO review (review, score, author, recipe) VALUES 
  ('집에서 간편하게 먹을 수 있습니다', 5, 3, 1),
  ('맛없네요 레시피 삭제 부탁드립니다', 1, 4, 1);
  `);

for (let i = 0; i < seedData.length; i++) {
  conn.query(seedData[i], (error, rows, fields) => {
    if (error) throw error;
    console.log(rows);
  });
}

conn.end();
