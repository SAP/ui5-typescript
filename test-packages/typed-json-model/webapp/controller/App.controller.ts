import Controller from "sap/ui/core/mvc/Controller";
import { TypedJSONContext, TypedJSONModel } from "../model/model";
import { exampleBinding } from "./Example";
import { List$ItemClickEvent } from "sap/ui/webc/main/List";
import MessageBox from "sap/m/MessageBox";

type PurchaseOrderId = `PO-${string}`;
type PurchaseOrderType = "Purchase Order";

interface Order {
  approved: boolean;
  items: OrderItem[];
  order_id: string;
  type: string;
}

interface OrderItem {
  description: string;
  item_id: string;
  price: number;
  quantity: number;
}

interface PurchaseOrder extends Order {
  order_id: PurchaseOrderId;
  type: PurchaseOrderType;
}

/**
 * @namespace typed.json.model.controller
 */
export default class App extends Controller {
  model: TypedJSONModel<{ order: PurchaseOrder }>;

  onInit(): void {
    const order: PurchaseOrder = {
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
    };
    this.model = new TypedJSONModel({ order: order });
    this.getView()?.setModel(this.model);
    exampleBinding(); // run example to test the model and context
  }

  /**
   * Example on how to how to use the typed context
   */
  onPressItem(event: List$ItemClickEvent): void {
    const context = event.getSource().getBindingContext() as TypedJSONContext<
      { order: PurchaseOrder },
      `/order/items/${number}`
    >;

    const price = context.getProperty("price"); // should automatically be typed as number!
    const description = this.model.getProperty("description", context); // should automatically be typed as string!
    // same as:
    // const description = context.getProperty("description");
    const item_id = this.model.getProperty("item_id", context); // should automatically be typed as string!
    // same as:
    // const order_id = context.getProperty("item_id");

    const infoText = `The ${description} (ID: ${item_id}) costs ${price} USD.`;
    MessageBox.information(infoText);
  }

  onPressRevoke(): void {
    this.revokeAbsolute();
    this.revokeRelative(); // does the same thing!
  }

  /**
   * Revoke the approval of the order using an absolute path.
   */
  revokeAbsolute(): void {
    this.model.setProperty("/order/approved", false);
  }

  /**
   * Revoke the approval of the order using a relative path.
   */
  revokeRelative(): void {
    const context = this.model.createBindingContext("/order");
    this.model.setProperty("approved", false, context);
  }
}
