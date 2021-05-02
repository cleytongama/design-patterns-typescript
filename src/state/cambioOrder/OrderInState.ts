export default interface OrderInState {
    getName(): string;
    approvePayment():void;
    rejectPayment():void;
    waitPayment():void;
    shipOrder():void;
}