import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Plus } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import {
  useAddService,
  useServices,
  useSubmissions,
} from "../hooks/useQueries";

export function AdminPage() {
  const { data: submissions, isLoading: loadingSubmissions } = useSubmissions();
  const { data: services, isLoading: loadingServices } = useServices();
  const addService = useAddService();
  const [newService, setNewService] = useState({
    name: "",
    description: "",
    icon: "",
    category: "",
  });
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleAddService = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addService.mutateAsync(newService);
      toast.success("Service added!");
      setNewService({ name: "", description: "", icon: "", category: "" });
      setDialogOpen(false);
    } catch {
      toast.error("Failed to add service.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[#111827]">Admin Panel</h1>
          <p className="text-gray-500 mt-1">
            Manage services and view contact submissions
          </p>
        </div>

        <Tabs defaultValue="submissions">
          <TabsList className="mb-6" data-ocid="admin.tab">
            <TabsTrigger value="submissions">Contact Submissions</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
          </TabsList>

          <TabsContent value="submissions">
            <Card>
              <CardHeader>
                <CardTitle>
                  Contact Form Submissions ({submissions?.length ?? 0})
                </CardTitle>
              </CardHeader>
              <CardContent>
                {loadingSubmissions ? (
                  <div
                    className="flex items-center gap-2 text-gray-500"
                    data-ocid="admin.submissions.loading_state"
                  >
                    <Loader2 className="animate-spin" size={16} /> Loading...
                  </div>
                ) : !submissions?.length ? (
                  <div
                    className="text-center text-gray-500 py-8"
                    data-ocid="admin.submissions.empty_state"
                  >
                    No submissions yet.
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table data-ocid="admin.submissions.table">
                      <TableHeader>
                        <TableRow>
                          <TableHead>#</TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Phone</TableHead>
                          <TableHead>Service</TableHead>
                          <TableHead>Message</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {submissions.map((sub, i) => (
                          <TableRow
                            key={sub.id.toString()}
                            data-ocid={`admin.submissions.row.${i + 1}`}
                          >
                            <TableCell>{i + 1}</TableCell>
                            <TableCell className="font-medium">
                              {sub.name}
                            </TableCell>
                            <TableCell>{sub.email}</TableCell>
                            <TableCell>{sub.phone}</TableCell>
                            <TableCell>{sub.serviceInterest}</TableCell>
                            <TableCell className="max-w-xs truncate">
                              {sub.message}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="services">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Services ({services?.length ?? 0})</CardTitle>
                <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                  <DialogTrigger asChild>
                    <Button
                      size="sm"
                      className="gap-1"
                      data-ocid="admin.service.open_modal_button"
                    >
                      <Plus size={14} /> Add Service
                    </Button>
                  </DialogTrigger>
                  <DialogContent data-ocid="admin.service.dialog">
                    <DialogHeader>
                      <DialogTitle>Add New Service</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleAddService} className="space-y-4">
                      <div>
                        <Label>Name *</Label>
                        <Input
                          value={newService.name}
                          onChange={(e) =>
                            setNewService((p) => ({
                              ...p,
                              name: e.target.value,
                            }))
                          }
                          required
                          data-ocid="admin.service.name.input"
                        />
                      </div>
                      <div>
                        <Label>Icon (emoji)</Label>
                        <Input
                          value={newService.icon}
                          onChange={(e) =>
                            setNewService((p) => ({
                              ...p,
                              icon: e.target.value,
                            }))
                          }
                          placeholder="🎯"
                          data-ocid="admin.service.icon.input"
                        />
                      </div>
                      <div>
                        <Label>Category</Label>
                        <Input
                          value={newService.category}
                          onChange={(e) =>
                            setNewService((p) => ({
                              ...p,
                              category: e.target.value,
                            }))
                          }
                          data-ocid="admin.service.category.input"
                        />
                      </div>
                      <div>
                        <Label>Description *</Label>
                        <Textarea
                          value={newService.description}
                          onChange={(e) =>
                            setNewService((p) => ({
                              ...p,
                              description: e.target.value,
                            }))
                          }
                          required
                          data-ocid="admin.service.description.textarea"
                        />
                      </div>
                      <div className="flex gap-2 justify-end">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setDialogOpen(false)}
                          data-ocid="admin.service.cancel_button"
                        >
                          Cancel
                        </Button>
                        <Button
                          type="submit"
                          disabled={addService.isPending}
                          data-ocid="admin.service.submit_button"
                        >
                          {addService.isPending ? (
                            <Loader2 className="animate-spin mr-1" size={14} />
                          ) : null}
                          Add Service
                        </Button>
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                {loadingServices ? (
                  <div
                    className="flex items-center gap-2 text-gray-500"
                    data-ocid="admin.services.loading_state"
                  >
                    <Loader2 className="animate-spin" size={16} /> Loading...
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services?.map((s, i) => (
                      <div
                        key={s.id.toString()}
                        className="border rounded-xl p-4"
                        data-ocid={`admin.services.item.${i + 1}`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl">{s.icon}</span>
                          <span className="font-semibold">{s.name}</span>
                        </div>
                        <p className="text-sm text-gray-500">{s.description}</p>
                        <span className="text-xs text-gray-400 mt-1 block">
                          {s.category}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
