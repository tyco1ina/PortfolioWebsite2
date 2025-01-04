provider "aws" {
  region = "us-east-1"  // any region you want your aws configured to
}

resource "aws_s3_bucket" "example" {
  bucket = "ty-portfolio-website" 
}

resource "aws_s3_bucket_public_access_block" "example" {
  bucket = aws_s3_bucket.example.id 
  block_public_acls = false
  block_public_policy = false
  ignore_public_acls = false
  restrict_public_buckets = false  
}

data "aws_iam_policy_document" "example" {
  statement{

    principals {
      type = "AWS"
      identifiers = ["*"]
    }    

    effect = "Allow"
    actions = [
      "s3:GetObject",
      "s3:ListBucket"
    ]

    resources = [
      aws_s3_bucket.example.arn ,
      "${aws_s3_bucket.example.arn}/*"
    ]
  }

}

resource "aws_s3_bucket_policy" "example" {
  bucket = aws_s3_bucket.example.id 
  policy = data.aws_iam_policy_document.example.json

  depends_on = [
    aws_s3_bucket_public_access_block.example,
  ]
}

resource "aws_s3_bucket_website_configuration" "example" {
  bucket = aws_s3_bucket.example.id 
  index_document {
    suffix = "index.html"    
  }
}