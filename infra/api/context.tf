variable "environment_name" {
  type = string
}

variable "project_prefix" {
  type = string
}

variable "policies" {
  type = list
}

locals {
  name = "api"
  role = "${var.project_prefix}-${local.name}-role-${var.environment_name}"
  connections_table = "${var.project_prefix}-${local.name}-connections-table-${var.environment_name}"
  subscriptions_table = "${var.project_prefix}-${local.name}-subscriptions-table-${var.environment_name}"
  parameter_prefix="/${var.project_prefix}/${var.environment_name}/${local.name}"
}
