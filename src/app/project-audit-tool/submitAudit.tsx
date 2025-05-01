// 'use client';
// import { useState } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Upload, ClipboardList } from 'lucide-react';


// const ProjectAuditTool = () => {
//     const [audit, setAudit] = useState<{ projectName: string; officialBudget: string; citizenEvidence: string }>({
//         projectName: '',
//         officialBudget: '',
//         citizenEvidence: '',
//       });

//       const handleAuditSubmit = () => {
//         console.log('Audit Submitted:', audit);
//         alert('Project audit comparison submitted for review.');
//       };

//     return ( <Card className="max-w-xl mx-auto">
// <CardContent className="space-y-4">
//   <h2 className="text-xl font-semibold flex items-center gap-2">
//     <ClipboardList className="text-green-600" /> Project Audit Tool
//   </h2>
//   <Input
//     placeholder="Project Name (e.g., Road Repair 2024)"
//     value={audit.projectName}
//     onChange={(e) => setAudit({ ...audit, projectName: e.target.value })}
//   />
//   <Textarea
//     placeholder="Official Budget & Specs (e.g., ₱1,000,000 for concrete road)"
//     value={audit.officialBudget}
//     onChange={(e) => setAudit({ ...audit, officialBudget: e.target.value })}
//   />
//   <Textarea
//     placeholder="Citizen Evidence (e.g., photos of gravel instead of concrete)"
//     value={audit.citizenEvidence}
//     onChange={(e) => setAudit({ ...audit, citizenEvidence: e.target.value })}
//   />
//   <Button onClick={handleAuditSubmit} className="w-full bg-green-600 hover:bg-green-700">
//     <Upload className="mr-2" /> Submit Audit
//   </Button>
// </CardContent>
// </Card>
//     )
// };

// export default ProjectAuditTool;