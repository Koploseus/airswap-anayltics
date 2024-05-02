import { ponder } from "@/generated";

ponder.on("SwapERC20:Authorize", async ({ event, context }) => {
  console.log(event.args);
});

ponder.on("SwapERC20:Cancel", async ({ event, context }) => {
  console.log(event.args);
});

ponder.on("SwapERC20:OwnershipTransferStarted", async ({ event, context }) => {
  console.log(event.args);
});

ponder.on("SwapERC20:OwnershipTransferred", async ({ event, context }) => {
  console.log(event.args);
});