# Frontend Developer Internship Challenge

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Screenshot

### 1. Landing Page
<img src="./public/landing_page.png" >

### 2. Find Job Page
<img src="./public/find_job.png" >

### 3. Detail Job Page by Id
<img src="./public/detail_job.png" >

## API Dummy Integration

baseURL: 
```
"https://67b13a313fc4eef538e9667f.mockapi.io/api"
```
getAllJob:
```
"https://67b13a313fc4eef538e9667f.mockapi.io/api/job"
```
getJobById: 
```
"https://67b13a313fc4eef538e9667f.mockapi.io/api/job/id"
```

Example value type:

- Status 200 OK
```
{
    createdAt : "string"
    name : "string"
    location : "string"
    category :"string"
    company : "string"
    description : "string"
    area : "string"
    responsibility : "string"
    job_type : "string"
    experience : "number"
    expired_at : "string"
    url : "string"
    telephone_number : "string"
    email : "string"
    image : "string"
    founded_in : "string"
    company_size : "number"
    education : "boolean" 
    organization_type : "boolean"
    salary : "string"
    id : "string"
}
```
Example response:

```
{
    createdAt : "2025-02-20T02:52:21.214Z"
    name : "Customer Security Coordinator"
    location : "Guinea"
    category :"Automotive"
    company : "Ankunding - Corwin"
    description : "Id reiciendis laboriosam dolorem eos facilis. Porro sint dolorem praesentium et. Nemo eaque at atque similique eius odio eos reiciendis.\nBeatae sed accusantium minima voluptate laboriosam nostrum. Veniam nulla aut quia voluptatum officia non necessitatibus quod. Laboriosam numquam unde assumenda corporis aperiam laudantium maxime magnam. Non consectetur fugit dolore. Asperiores voluptate numquam.\nSuscipit labore debitis ea animi odio ad modi. Animi hic quos facere consequatur quos. Quibusdam et nemo similique accusamus minus. Nostrum harum vitae similique temporibus nobis aspernatur enim."
    area : "Communications"
    responsibility : "Necessitatibus nisi blanditiis optio ea sapiente iure commodi odit. Ullam itaque eum repudiandae ea aperiam perspiciatis unde ducimus cumque. Unde sit harum fugit earum eos saepe vitae beatae fugit. Dolor tempora consequuntur nisi accusantium."
    job_type : "Agent"
    experience : 60
    expired_at : "2025-07-09T11:31:59.355Z"
    url : "http://perfumed-lap.name"
    telephone_number : "226-445-8018 x666"
    email : "Marianne1@hotmail.com"
    image : "https://loremflickr.com/640/480/business"
    founded_in : "1959-01-25T04:44:18.511Z"
    company_size : 64324
    education : false 
    organization_type : false
    salary : "39.83"
    id : "1"
}
```

## Search Feature & FIlter

ongoing

<img src="./public/" >

<p align="right">(<a href="#top">back to top</a>)</p>