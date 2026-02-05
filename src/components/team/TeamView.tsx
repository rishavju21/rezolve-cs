import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { teamMembers as initialTeamMembers } from '@/data/mockData';
import { useToast } from '@/hooks/use-toast';
import { 
  Plus, 
  Users,
  Settings,
  Shield,
  Mail,
  MoreVertical,
  UserPlus
} from 'lucide-react';

// Mock available users to add (not yet in team)
const availableUsers = [
  { id: 'u1', name: 'John Smith', email: 'john@rezolve.io', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John' },
  { id: 'u2', name: 'Lisa Chen', email: 'lisa@rezolve.io', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa' },
  { id: 'u3', name: 'Mike Brown', email: 'mike@rezolve.io', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike' },
];

export function TeamView() {
  const { toast } = useToast();
  const [teamMembers, setTeamMembers] = useState(initialTeamMembers);
  const [addMemberOpen, setAddMemberOpen] = useState(false);
  const [inviteMemberOpen, setInviteMemberOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState('');
  const [selectedRole, setSelectedRole] = useState('agent');
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteRole, setInviteRole] = useState('agent');

  const handleAddMember = () => {
    if (!selectedUserId) {
      toast({ title: 'Error', description: 'Please select a user to add', variant: 'destructive' });
      return;
    }

    const userToAdd = availableUsers.find(u => u.id === selectedUserId);
    if (userToAdd) {
      const newMember = {
        id: userToAdd.id,
        name: userToAdd.name,
        email: userToAdd.email,
        avatar: userToAdd.avatar,
        role: selectedRole as 'admin' | 'agent',
      };
      setTeamMembers([...teamMembers, newMember]);
      toast({ title: 'Success', description: `${userToAdd.name} has been added to the team` });
      setAddMemberOpen(false);
      setSelectedUserId('');
      setSelectedRole('agent');
    }
  };

  const handleInviteMember = () => {
    if (!inviteEmail) {
      toast({ title: 'Error', description: 'Please enter an email address', variant: 'destructive' });
      return;
    }

    if (!inviteEmail.includes('@')) {
      toast({ title: 'Error', description: 'Please enter a valid email address', variant: 'destructive' });
      return;
    }

    toast({ 
      title: 'Invitation Sent', 
      description: `An invitation has been sent to ${inviteEmail}` 
    });
    setInviteMemberOpen(false);
    setInviteEmail('');
    setInviteRole('agent');
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Team Management</h1>
          <p className="text-muted-foreground mt-1">
            Manage your workspace members and their roles
          </p>
        </div>
        <div className="flex items-center gap-2">
          {/* Add Members Dialog */}
          <Dialog open={addMemberOpen} onOpenChange={setAddMemberOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Users className="h-4 w-4 mr-2" />
                Add Members
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Team Member</DialogTitle>
                <DialogDescription>
                  Add an existing user to your team workspace.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label>Select User</Label>
                  <Select value={selectedUserId} onValueChange={setSelectedUserId}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a user to add" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableUsers.map((user) => (
                        <SelectItem key={user.id} value={user.id}>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src={user.avatar} alt={user.name} />
                              <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <span>{user.name}</span>
                            <span className="text-muted-foreground text-sm">({user.email})</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Role</Label>
                  <Select value={selectedRole} onValueChange={setSelectedRole}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="agent">Agent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setAddMemberOpen(false)}>Cancel</Button>
                <Button onClick={handleAddMember}>
                  <UserPlus className="h-4 w-4 mr-2" />
                  Add Member
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Invite Member Dialog */}
          <Dialog open={inviteMemberOpen} onOpenChange={setInviteMemberOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Invite Member
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Invite Team Member</DialogTitle>
                <DialogDescription>
                  Send an email invitation to join your team workspace.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label>Email Address</Label>
                  <Input 
                    type="email" 
                    placeholder="colleague@example.com"
                    value={inviteEmail}
                    onChange={(e) => setInviteEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Role</Label>
                  <Select value={inviteRole} onValueChange={setInviteRole}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="agent">Agent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setInviteMemberOpen(false)}>Cancel</Button>
                <Button onClick={handleInviteMember}>
                  <Mail className="h-4 w-4 mr-2" />
                  Send Invitation
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Workspace Info */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Workspace Settings
          </CardTitle>
          <CardDescription>Configure your team workspace</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground">Workspace Name</label>
              <Input defaultValue="Rezolve Support Team" className="mt-1.5" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Workspace URL</label>
              <div className="flex items-center gap-2 mt-1.5">
                <span className="text-sm text-muted-foreground">rezolve.io/</span>
                <Input defaultValue="support" className="max-w-[200px]" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Team Members */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Team Members
          </CardTitle>
          <CardDescription>{teamMembers.length} members in this workspace</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>
                      {member.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-foreground">{member.name}</p>
                    <p className="text-sm text-muted-foreground">{member.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <Shield className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm capitalize text-muted-foreground">
                      {member.role}
                    </span>
                  </div>
                  <Button variant="ghost" size="icon-sm">
                    <Mail className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon-sm">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Pending Invitations */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Pending Invitations
          </CardTitle>
          <CardDescription>Invitations waiting for acceptance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-muted-foreground">
            <Mail className="h-12 w-12 mx-auto mb-3 opacity-30" />
            <p>No pending invitations</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
