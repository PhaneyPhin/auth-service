enum Topic {
    PROCESS_INVOICE = 'process-invoice',
    PROCESS_INVOICE_REPLY ='process-invoice.reply',
    PROCESS_BATCH_INVOICE = 'process-batch-invoice',
    PROCESS_BATCH_INVOICE_REPLY = 'process-batch-invoice.replay',
    GENERATE_INVOICE = 'generate-invoice',
    SEND_NOTIFICATION_INVOICE_UPDATED = 'invoice.send-notification-updated',
    UPDATE_INVOICE_STATUS = 'invoice.update-status',
    SERVICE_ACCOUNT_CREATED = 'service-account.created',
    SERVICE_ACCOUNT_UPDATED = 'service-account.updated',
    SERVICE_ACCOUNT_DELETED = 'service-account.deleted',
    FORMAT_GENERATED = 'format-generated',
    GET_SUMMARY_MERCHANT = 'get-summary-merchant',
    GET_SUMMARY_MERCHANT_REPLY = 'get-summary-merchant.reply',
    GET_DAILY_REPORT = 'get-daily-report',
    GET_DAILY_REPORT_REPlY = 'get-daily-report.reply',
}

export const LISTEN_TOPIC = [
    Topic.PROCESS_INVOICE_REPLY,
    Topic.GENERATE_INVOICE,
    Topic.UPDATE_INVOICE_STATUS,
    Topic.SERVICE_ACCOUNT_CREATED,
    Topic.SERVICE_ACCOUNT_UPDATED,
    Topic.SERVICE_ACCOUNT_DELETED,
    Topic.PROCESS_BATCH_INVOICE_REPLY,
    Topic.FORMAT_GENERATED,
    Topic.GET_SUMMARY_MERCHANT_REPLY,
    Topic.GET_DAILY_REPORT_REPlY
]

export default Topic