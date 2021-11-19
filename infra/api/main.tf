module "websockets" {
  source           = "../websockets"
  environment_name = var.environment_name
  prefix           = "${var.project_prefix}-${local.name}"
}
