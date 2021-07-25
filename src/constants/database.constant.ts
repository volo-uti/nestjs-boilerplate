/**
 * 환경변수에서 불러옴
 */
const { POSTGRES_HOST, POSTGRES_PORT, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB }: NodeJS.ProcessEnv = process.env;

/**
 * POSTGRES 관련 상수
 */
export const postgresConstants = {
  /**
   * Host 주소
   */
  host: POSTGRES_HOST,

  /**
   * Port 번호 (숫자로 파싱)
   */
  port: parseInt(POSTGRES_PORT),

  /**
   * 사용자 ID
   */
  user: POSTGRES_USER,

  /**
   * 사용자 PW
   */
  password: POSTGRES_PASSWORD,

  /**
   * 데이터베이스 이름
   */
  db: POSTGRES_DB,
};
