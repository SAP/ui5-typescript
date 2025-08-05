import { TypedJSONContext, TypedJSONModel } from "../model/model";

interface Order {
  order_id: string;
  type: string;
  approved: boolean;
  items: OrderItem[];
}

interface OrderItem {
  item_id: string;
  description: string;
  quantity: number;
  price: number;
}

type PurchaseOrderId = `PO-${string}`;
type PurchaseOrderType = "Purchase Order";

interface PurchaseOrder extends Order {
  order_id: PurchaseOrderId;
  type: PurchaseOrderType;
}

const data: { order: PurchaseOrder } = {
  order: {
    order_id: "PO-2025-0042",
    type: "Purchase Order",
    approved: true,
    items: [
      {
        item_id: "IT-0815",
        description: "Notebook",
        quantity: 1,
        price: 1000.0,
      },
    ],
  },
};

/**
 * Example usage of TypedJSONModel and TypedContext.
 * Demonstrates how to use the model and context to get and set properties
 * and tests the runtime behaviour of the typed wrapper classes.
 */
export function exampleBinding() {
  const model = new TypedJSONModel(data);
  const typedContext = new TypedJSONContext(model, "/order");

  console.assert(typedContext.getProperty("approved") === true);
  console.assert(typedContext.getProperty("items/0/description") === "Notebook");

  console.assert(model.getProperty("/order/approved") === true);
  console.assert(model.getProperty("/order") === data.order);
  console.assert(model.getProperty("/order/items/0") === data.order.items[0]);
  console.assert(model.getProperty("approved", typedContext) === true);
  console.assert(model.getProperty("items/0/description", typedContext) === "Notebook");
  console.assert(model.getProperty("items/0", typedContext) === data.order.items[0]);

  console.assert(model.setProperty("approved", false, typedContext) === true);
  console.assert(model.getProperty("approved", typedContext) === false);
  console.assert(model.getProperty("/order/approved") === false);

  console.assert(model.setProperty("items/0/description", "Tablet", typedContext) === true);
  console.assert(model.getProperty("items/0/description", typedContext) === "Tablet");

  console.assert(model.setProperty("items/0/quantity", 2, typedContext) === true);
  console.assert(model.getProperty("items/0/quantity", typedContext) === 2);

  console.log("Hello, TypedJSONModel and TypedContext!");
}
