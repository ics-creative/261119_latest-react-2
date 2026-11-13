/**
 * Transitionの結果欄
 */
export const TransitionResults = ({unitPrice, total, isPending = false}) => (
<dl className="transition__results">
        <dt>Unit price:</dt>
        <dd>¥{unitPrice.toLocaleString()}</dd>
        <dt>Total:</dt>
        {/** transition中のpending中は「calculating」表示を出す */}
        <dd>{isPending ? "calculating..." : `¥${total.toLocaleString()}`}</dd>
      </dl>
)