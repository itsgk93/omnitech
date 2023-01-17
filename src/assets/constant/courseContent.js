export const coursesContentData = [
    {
        title: "Source Code Management using Git",
        id: "scm",
        content: [
             "SCM/VCS Introduction",
             "Centralized vs Distributed systems",
             "Git Architecture and benefits",
             "Working with Local repo in Git",
             "Working with Remote Repo (GitHub)",
             "Branching in Git",
             "Undoing changes in Git",
             "Additional Concepts and Commands in Git",
             "Working with Pull Requests in GitHub",
             "Resolving Merge Conflict",
             "Webhooks and Integration in Git and GitHub",
             "Additional GitHub concepts"
        ]
    },
    {
        title: "Continuous Integration using Jenkins",
        id: 'ci',
        content: [
            "Introduction",
            "Concepts",
              " #Continuous Integration",
              " #Continuous Delivery",
              " #Continuous Deployemnt",
            "Jenkins installation and configuration",
            "Plugins",
            "Sample Jobs",
            "Upstream/Downstream Projects",
            "Parameterized Builds",
            "Build triggers",
            "Continuous Testing with Jenkins",
            "Continuous Deployment with Jenkins",
            "Integrating Docker with Jenkins",
            "Pipeline as Code (Jenkinsfile)",
        ]
    },
    {
        title: "Configuration Management using Ansible/Chef/Puppet",
        id: 'cm',
        content: [
            "Configuration Management Concepts",
            "Ansible Introduction and Architecture",
            "How to manage your Infrastructure using Ansible",
            "Lab Setup and Installation",
            "Setup Ansible server and bootstrap nodes",
            "Ansible Ad-hoc Commands",
            "Ansible Module",
            "Ansible Playbooks",
            "Ansible Roles",
            "Ansible Galaxy",
            "Ansible Vault",
            "Ansible Tower",
            "Chef Introduction and Core Concepts",
            "Lab Setup and Installation",
            "How to manage your Infrastructure using Chef",
            "Understanding Roles in Chef",
            "Understanding Environments in Chef",
            "Chef Ohai and Node Object",
            "Puppet Introduction and Core concepts",
            "Lab Setup and Installation",
            "How to manage your Infrastructure using Puppet",
            "Meta Parameters and Chaining Arrows in Puppet",

        ]
    },
    {
        title: "Infrastructure-as-Code",
        id: "iac",
        content: [
            "I-a-C Introduction",
            "Concept",
            "Why I-a-C?",
            "Terraform alternatives",
            "Terraform advantages",
            "Configure Terraform on Macbook",
            "Configure Terraform on Ubuntu",
            "Terraform commands (init, plan, apply, destroy)",
            "Variables and Outputs",
            "Terraform States",
            "Terraform Providers",
            "Terraform Provisioners",
            "Terraform Modules",
            "Terraform Cloud",
            "Terraform with AWS",
        ]
    },
    {
        title: "Containerization using Docker",
        id: "containers",
        content: [
            "Introduction to Containers and Docker",
            "Containers vs Virtual Machine",
            "Docker Installation",
            "Important Docker Commands",
            "Working with a Container",
            "Create your own Docker Image (Dockerfile)",
            "Working with Public Docker Registry (DockerHub)",
            "Docker Networking",
            "Persist data in Docker (Docker Volumes)",
            "Deploy a containerized app using Docker",
            "Working with multi container model (Docker Compose)",
            "Working with Multiple container hosts (Introducing Docker Swarm)",
            "Working with Docker Services in Swarm",
            "Docker Stacks",
            "Setup a Private Docker Registry",
        ]
    },
    {
        title: "Containers Orchaestration",
        id: "kubernetes",
        content: [
            "Introduction and Architecture",
            "K8s Objects (Pods / Nodes / Ingress / Deployments and more)",
            "Kubernetes on Laptop (Docker for Desktop)",
            "Kubernetes on Laptop (Minikube)",
            "Kubernetes Cluster installation",
            "Getting familier with kubectl",
            "Working with k8s YAML files",
            "Sample App on K8s",
            "PV, PVC and Storage Class",
            "Networking and Services",
            "Helm Charts",
            "Istio",
            "Kubernetes Operators",
        ]
    },
    {
        title: "Observability and Monitoring",
        id: "monitoring",
        content: [
            "ELK Stack",
             "- Introduction",
             "- Installation and configuration",
             "- Working with Kibana",
            "Prometheus & Grafana",
             "- Installation",
             "- Dashboards Configuration",
            "AWS Cloud Watch",
             "- Overview",
             "- Configuration",
        ]
    },
    
    
    {
        title: "AI/ML",
        desc: "Artificial intelligence (AI) is intelligence—perceiving, synthesizing, and inferring information—demonstrated by machines, as opposed to intelligence displayed by animals and humans. Machine learning (ML) is a field of inquiry devoted to understanding and building methods that 'learn', that is, methods that leverage data to improve performance on some set of tasks. It is seen as a part of artificial intelligence. ",

    },

    {
        title: "Introduction to Cloud Computing using AWS",
        id: "intro_cloud",
        content: [
            "Introduction and benefits to Cloud Computing",
            "Compute on AWS",
            "Storage on AWS",
            "AWS Networking",
            "Load Balancing on AWS",
            "AWS CloudWatch",
            "Sample Application hosting on AWS",
        ]

    },
    {
        title: "DevOps on AWS",
        id: "devops_on_aws",
        content: [
            "Understanding DevOps Principles on AWS",
            "Deployment strategies (without Downtime)",
            "CICD on AWS",
            "Introduction to AWS Code Suite",
            "Container services on AWS",
            "ECS introduction",
            "Deploy a sample app on ECS",
            "EKS Introduction",
            "Deploy a sample app on EKS",
            "Infrastructure as Code using CloudFormation",
            "Configuration Management using OpsWorks",
            "Configuration Management using Systems Manager",
            "Elastic Beanstalk",
            "Introduction to Serverless on AWS",
          ]

    },
    {
        title: "DevOps on Microsoft Azure",
        id: "devops_on_azure",
        content: [
            "Azure DevOps [Introduction]",
            "Azure Boards",
            "Azure Pipelines",
            "Azure Repos",
            "Azure Test Plans",
            "Azure Artifacts",
            "IaC using ARM Templates",
            "Container services in Azure",
            "AKS (Azure Kubernetes Service)",
            "Azure Container Registry",
            "OpenShift on Azure",
        ]

    }
];
