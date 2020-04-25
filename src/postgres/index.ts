import { Pool, PoolConfig, native } from "pg";
import Table from "./table";
import { promisify } from "util";

const wait = promisify(setTimeout);

let pool: Pool;

async function init(config: PoolConfig) {
  //
  if (pool) return;

  pool = new native.Pool({
    ...config,
    connectionTimeoutMillis: 6 * 1000
  });

  while (true) {
    //
    try {
      await pool.query("SELECT NOW()");

      console.log(
        `Connect to Postgres ${config.host}:${config.port} success...`
      );

      return;
    } catch (err) {
      //
      console.error(err);

      console.log(`Retry connection after 1000 milliseconds`);
      await wait(1000);
    }
    //
  }
  //
}

function table(tablename: string) {
  //
  return Table(pool, tablename);
}

export default {
  init,
  table
};
