import ws from "ws";
import { createClient } from "graphql-ws";

const client = createClient({
  webSocketImpl: ws,
  url: "wss://v02eprbv80.execute-api.eu-west-1.amazonaws.com/dev",
});

(async () => {
  try {
    const result = await new Promise((resolve, reject) => {
      let r;
      client.subscribe(
        {
          query: "{ gameData { text }}",
        },
        {
          next: console.log,
          error: reject,
          complete: () => resolve(r),
        }
      );
    });
    console.log(result);
  } catch (e) {
    console.log(e);
  }
})();
