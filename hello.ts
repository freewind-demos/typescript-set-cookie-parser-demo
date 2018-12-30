import * as cookieParser from 'set-cookie-parser';

const cookies = [
  'ucPref_agent_lead=%7B%7D; Domain=.compass.com; Path=/',
  'uc_pref_staging=%7B%22anonymous_user_id%22%3A%225c28bc77364b0c75fa8b31d8%22%7D; Domain=.compass.com; expires=Mon, 30-Dec-2019 18:39:19 GMT; Max-Age=31557600; Path=/',
  'remember_token_staging=WyI1OGY5MDNlODU3Zjk2MDdlNTYwZjM5OGEiLCJlODZmZjQ0OTg3YTU0ZWU2MDVmYjE4ZTZiYTA4MTliZiJd.DwpN9w.Ss19UGgQiFueZn5Dee6eF3jXnIE; Domain=.compass.com; expires=Tue, 29-Jan-2019 12:39:19 GMT; Path=/',
  'session_staging=.eJxNy7EKwjAQANBfkZu7JJIl4BCoiMNdES6Uy1IQozHVJbVLSv7dtW9_G0zPEpcE9lfW2MH0foDd4HAHC9j7Knk2NJ4N8VUje4VZKvJNhfxJkkVTdSr0eILWwbrEsv_E6Tuwq4FfirQYyu4Y2Gu8SB04JWjtDwMHKBA.DwpN9w.Z52-V6pk92A0hXxOpuk38uNaBgk; Domain=.compass.com; Path=/; HttpOnly'
];

cookies.forEach(rawCookie => {
  const cookie = cookieParser.parse(rawCookie);
  console.log(cookie);
});

