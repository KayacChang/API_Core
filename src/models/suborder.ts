type SubOrder = {
  //  pk
  sub_order_id: string;

  //  properties
  state: string;
  bet: number;

  // fk
  order_id: string;

  //  times
  created_at: Date;
  updated_at: Date;
  completed_at: Date;
};

SubOrder.pk = "sub_order_id";

export default function SubOrder(data: any): SubOrder {
  //
  return {
    sub_order_id: data.sub_order_id,

    state: data.state,
    bet: Number(data.bet),

    order_id: data.order_id,

    created_at: new Date(data.created_at),
    updated_at: new Date(data.updated_at),
    completed_at: new Date(data.completed_at),
  };
}
