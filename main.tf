variable "TFC_WORKSPACE_NAME" {
  type    = string
  default = ""
}

locals {
  lambda_basic_execution_role = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
  environment_name            = var.TFC_WORKSPACE_NAME != "" ?
trimprefix(var.TFC_WORKSPACE_NAME, "superconnectors") : terraform.workspace
}

terraform {
  backend "remote" {
    organization = "superconnectors"
    workspaces {
      prefix = "superconnectors-"
    }
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 2.0.0"
    }
  }

  required_version = "~> 1.0.0"
}

provider "aws" {
  region = "eu-west-1"
}
