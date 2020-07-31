# Certificates

Certificates were generated from `kubeadm` using the following config in a fresh container.

```yaml
apiVersion: "kubeadm.k8s.io/v1beta2"
kind: ClusterConfiguration
etcd:
    local:
        serverCertSANs:
        - etcd
        peerCertSANs:
        - etcd
certificatesDir: /pki
```

```bash
kubeadm init phase certs etcd-ca --config ./kubeadm.yaml
kubeadm init phase certs etcd-server --config ./kubeadm.yaml
kubeadm init phase certs etcd-peer --config ./kubeadm.yaml
```
