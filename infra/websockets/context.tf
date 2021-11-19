variable "environment_name" {
  type = string
}

variable "prefix" {
  type = string
}

locals {
  connections_table = "${var.prefix}-connections-table-${var.environment_name}"
  subscriptions_table = "${var.prefix}-subscriptions-table-${var.environment_name}"
}
